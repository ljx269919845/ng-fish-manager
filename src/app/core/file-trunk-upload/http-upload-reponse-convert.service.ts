import { ResponseModel } from './../http/http.type';
import { Injectable } from '@angular/core';
import { IHttpResponseConvert } from '../http/http-respone-convert.service';

@Injectable({
    providedIn: 'root'
})
export class HttpUploadReponseConvertService extends IHttpResponseConvert {
    constructor() {
        super();
    }

    convertHttpResponse(response): ResponseModel {
        return new ResponseModel(response.retCode, response.retMsg, response);
    }

    checkHttpResponseSuccess(response: ResponseModel) {
        return response.code === '0000';
    }
}
