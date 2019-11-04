import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';
import { ComponentRef } from '@angular/core';

export class CustomRouteReuseStrategy implements RouteReuseStrategy {

    private handlers: { [key: string]: DetachedRouteHandle } = {};

    // 直接返回 true 表示对所有路由允许复用
    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        console.log('shouldDetach', route);
        return route.data.reload === false;
    }
    // 当路由离开时会触发。按path作为key存储路由快照&组件当前实例对象；path等同RouterModule.forRoot中的配置。
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        console.log('store', this.getFullPath(route));
        this.handlers[this.getFullPath(route)] = handle;
    }
    // 若 path 在缓存中有的都认为允许还原路由
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        console.log('shouldAttach', this.getFullPath(route));
        return !!route.routeConfig && !!this.handlers[this.getFullPath(route)];
    }
    // 从缓存中获取快照，若无则返回null
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        return this.handlers[this.getFullPath(route)];
    }
    // 进入路由触发，判断是否同一路由
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        // console.warn('retrieve', this.getFullPath(future));
        this.clearWhenJumpOut(future, curr);
        // console.warn('after clearHanlers',this.handlers);
        return future.routeConfig === curr.routeConfig;
    }

    private clearWhenJumpOut(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot) {
        let futurePath = this.getFullPath(future);
        let currPath = this.getFullPath(curr);
        console.log('futurePath', futurePath);
        console.log('currPath', currPath);
        if (futurePath.indexOf(currPath) < 0) {
            let handle: DetachedRouteHandle = this.handlers[currPath];
            if (handle) {
                let componentRef: ComponentRef<any> = handle['componentRef'] as ComponentRef<any>;
                if (componentRef) {
                    componentRef.destroy();
                    delete this.handlers[currPath];
                }
            }
        }
    }

    /**
     * 清除掉多余的 路由回调，当跳出当前路由的时候
     * @param route 
     */
    // private clearHanlers(route: ActivatedRouteSnapshot) {
    //     let path: string = this.getFullPath(route);
    //     if (!path) {
    //         return;
    //     }
    //     for (let indexName in this.handlers) {
    //         // 路径匹配不在当前路由
    //         if (path.indexOf(indexName) < 0) {
    //             let handle: DetachedRouteHandle = this.handlers[indexName];
    //             if (handle) {
    //                 let componentRef:ComponentRef<any> = handle['componentRef'] as ComponentRef<any>;
    //                 if(componentRef){
    //                     componentRef.destroy();
    //                     delete this.handlers[indexName];
    //                 }
    //             }
    //         }
    //     }
    // }


    private getFullPath(route: ActivatedRouteSnapshot): string {
        // let fullPath = '';
        // if(route.pathFromRoot && route.pathFromRoot.length > 0){
        //     for(let i = 0;i < route.pathFromRoot.length; i ++){
        //         if(route.pathFromRoot[i].routeConfig){
        //             fullPath += ('/' + route.pathFromRoot[i].routeConfig.path);
        //         }
        //     }
        // }
        // return fullPath;
        return route['_routerState'].url;
    }
}