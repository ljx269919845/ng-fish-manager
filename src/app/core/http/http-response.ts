// import { Response, ResponseOptions } from '@angular/http';

// import { HttpJson } from './http-json';
import { RequestModel, ResponseModel, HTTP_HOOKS } from './http.type';
import { HttpHookService } from './http-hook.service';

export type HttpResFunc = (res: any, req?: any, result?: any, error?: any) => boolean | void;
export type processFunc = (current: number, total: number) => void;
// 此类是为了方便http调用, 从而对Promise增加了一层封装
export class HttpResponse {
  public response: ResponseModel;

  private beforFunc: Array<HttpResFunc> = [];
  private afterFunc: Array<HttpResFunc> = [];
  private successFunc: Array<HttpResFunc> = [];
  private errorHander: Array<HttpResFunc> = [];
  private failHander: Array<HttpResFunc> = [];
  private translateHandler: (res: any) => any;
  private processFunc: Array<processFunc> = [];

  private delayPromise: Promise<any>;
  private delayFunc;
  private executePromiseResolve;
  private executePromiseReject;
  private executePromise: Promise<RequestModel>;
  private noReq = false; // 不发送http请求标志

  constructor(
    private http,
    private request: RequestModel,
    private httpHook: HttpHookService,
    cacheRes?: ResponseModel
  ) {
    this.executePromise = new Promise((resolve, reject) => {
      this.executePromiseResolve = resolve;
      this.executePromiseReject = reject;
    });
    this.response = cacheRes;
    Promise.resolve(null).then(() => {
      if (this.noReq) {
        return;
      }
      if (this.request && !this.response) {
        this.requestHttp();
      } else {
        this.makeCacheResponse();
      }
    });
    this.executePromise.then((result) => {
      console.log('http execute over: ', result, request);
      return result;
    });
  }

  private requestHttp() {
    if (this.delayPromise) {
      this.delayPromise.then((data) => {
        if (this.delayFunc) {
          this.delayFunc(data, this.request);
        }
        this.http.makeHttpRequest(this.request, this);
      });
    } else {
      this.http.makeHttpRequest(this.request, this);
    }
  }

  public makeCacheResponse(cacheRes?: ResponseModel) {
    if (cacheRes) {
      this.response = cacheRes;
    }
    this.handleHttpEnd();
    let result;
    for (let i = 0; i < this.successFunc.length; ++i) {
      result = this.successFunc[i](this.response, this.request, result);
      if (result === false) {
        break;
      }
    }
    this.executePromiseResolve(true);
    this.handleHttpEnd();
  }

  setNoReq() {
    this.noReq = true;
  }

  before(func: HttpResFunc) {
    if (typeof func !== 'function') {
      return;
    }
    if (
      this.beforFunc.findIndex((value) => {
        return value === func;
      }) !== -1
    ) {
      return;
    }
    this.beforFunc.push(func);
    return this;
  }

  after(func: HttpResFunc) {
    if (typeof func !== 'function') {
      return;
    }
    if (
      this.afterFunc.findIndex((value) => {
        return value === func;
      }) !== -1
    ) {
      return;
    }
    this.afterFunc.push(func);
    return this;
  }

  error(func: HttpResFunc) {
    if (typeof func !== 'function') {
      return;
    }
    if (
      this.errorHander.findIndex((value) => {
        return value === func;
      }) !== -1
    ) {
      return;
    }
    this.errorHander.push(func);
    return this;
  }

  process(func: processFunc) {
    if (typeof func !== 'function') {
      return;
    }
    if (
      this.processFunc.findIndex((value) => {
        return value === func;
      }) !== -1
    ) {
      return;
    }
    this.processFunc.push(func);
    return this;
  }

  public delayProcess(func: HttpResFunc) {
    this.delayFunc = func;
    return this;
  }

  success(func: HttpResFunc): HttpResponse {
    if (typeof func !== 'function') {
      return;
    }
    if (
      this.successFunc.findIndex((value) => {
        return value === func;
      }) !== -1
    ) {
      return;
    }
    this.successFunc.push(func);
    return this;
  }

  failed(func: HttpResFunc) {
    if (typeof func !== 'function') {
      return;
    }
    if (
      this.failHander.findIndex((value) => {
        return value === func;
      }) !== -1
    ) {
      return;
    }
    this.failHander.push(func);
    return this;
  }

  translate(func: (data: any) => any) {
    if (typeof func !== 'function') {
      return;
    }
    this.translateHandler = func;
    return this;
  }

  delay(delay: Promise<any>) {
    this.delayPromise = delay;
    return this;
  }

  handleHttpBegin() {
    for (let i = 0; i < this.beforFunc.length; ++i) {
      if (this.beforFunc[i](this.request)) {
        return true;
      }
    }
    return false;
  }

  handlesuccess(resp: ResponseModel) {
    this.response = resp;
    if (this.translateHandler) {
      this.response.data = this.translateHandler(resp.data);
    }
    let result = null;
    for (let i = 0; i < this.successFunc.length; ++i) {
      result = this.successFunc[i](this.response, this.request, result);
      if (result === false) {
        break;
      }
    }
    this.executePromiseResolve(true);
  }

  handleFailed(resp: ResponseModel) {
    this.response = resp;
    let result = null;
    if (this.failHander.length) {
      this.failHander.forEach((failFunc) => {
        result = failFunc(this.response, this.request, result);
        if (result === false) {
          return true;
        }
      });
      this.executePromiseResolve(false);
    } else {
      this.handleError('http result code failed');
    }
  }

  handleError(error) {
    let result = null;
    if (this.errorHander.length) {
      this.errorHander.forEach((errorFunc) => {
        result = errorFunc(this.response, this.request, error, result);
      });
      this.executePromiseResolve(false);
    } else {
      console.error('you should set errorhandler');
      console.error(JSON.stringify(this.request));
      console.error(error || null);
    }
    return this;
  }

  handleProcess(current: number, total: number) {
    for (const func of this.processFunc) {
      func(current, total);
    }
  }

  handleHttpEnd() {
    this.afterFunc.forEach((afterFunc) => {
      afterFunc(this.response, this.request);
    });
  }

  toPromise(): Promise<any> {
    return this.executePromise;
  }

  clone(newRes: HttpResponse): HttpResponse {
    this.beforFunc.forEach((func) => {
      newRes.before(func);
    });
    this.successFunc.forEach((func) => {
      newRes.success(func);
    });
    newRes.translate(this.translateHandler);
    this.failHander.forEach((func) => {
      newRes.failed(func);
    });
    this.errorHander.forEach((func) => {
      newRes.error(func);
    });
    this.afterFunc.forEach((func) => {
      newRes.after(func);
    });
    return newRes;
  }
}
