import { Injectable } from '@angular/core';

let UUID = {};

@Injectable({
    providedIn: 'root'
})
export class CommonFuncService {
    constructor() { }

    public static mergeString(a: string, b: string) {
        if (a <= b) {
            return a + ',' + b;
        }
        return b + ',' + a;
    }

    public static clone(object: any) {
        if (object == null) {
            return object;
        } else if (object instanceof Array) {
            return CommonFuncService.cloneArray(object);
        } else if (object instanceof Date) {
            return new Date(object.getTime());
        } else if (typeof object == 'object') {
            return CommonFuncService.cloneObject(object);
        } else {
            return object;
        }
    }

    private static cloneObject(object) {
        let result = new Object();
        for (let name in object) {
            result[name] = CommonFuncService.clone(object[name]);
        }
        return result;
    }

    private static cloneArray(object) {
        let result = [];
        for (let ob of object) {
            result.push(CommonFuncService.clone(ob));
        }
        return result;
    }

    public static makeUUID() {
        let id = '' + parseInt('' + Math.random() * 100000, 10);
        while (UUID[id]) {
            id = '' + parseInt('' + Math.random() * 100000, 10);
        }
        UUID[id] = 1;
        return id;
    }

    public static objectEq(object1, object2) {
        if (object1 && !object2) {
            // console.log('object not Eq object2 is empty', object1, object2);
            return false;
        }
        if (!object1 && object2) {
            // console.log('object not Eq object1 is empty', object1, object2);
            return false;
        }
        if (object1 instanceof Array) {
            if (!(object2 instanceof Array)) {
                // console.log('object not Eq object2 is not array', object1, object2);
                return false;
            }
            if (object1.length != object2.length) {
                // console.log('object not Eq array len not eq', object1, object2);
                return false;
            }
            let len = object1.length;
            for (let i = 0; i < len; ++i) {
                if (!CommonFuncService.objectEq(object1[i], object2[i])) {
                    // console.log('object not Eq array object not eq', object1[i], object2[i]);
                    return false;
                }
            }
            return true;
        } else if (object1 && typeof object1 == 'object') {
            if (typeof object2 != 'object') {
                // console.log('object not Eq object2 is not object', object1, object2);
                return false;
            }
            // if (Object.getOwnPropertyNames(object1).length != Object.getOwnPropertyNames(object2).length) {
            //     console.log('object not Eq object keys length not eq', object1, object2);
            //     return false;
            // }
            for (let name in object1) {
                if (!CommonFuncService.objectEq(object1[name], object2[name])) {
                    // console.log('object not Eq object value not eq', name, object1, object2);
                    return false;
                }
            }
            return true;
        }
        return object1 === object2;
    }

    public static objectEqFirst(first, second) {
        // if (!first) {
        //     return first === second;
        // }
        if (first instanceof Date && !(second instanceof Date)) {
            console.log(`${first} is date, but ${second} not`);
            return false;
        } else if (first instanceof Date && second instanceof Date) {
            return first.getTime() === second.getTime();
        } else if (first instanceof Array && !(second instanceof Array)) {
            console.log(`${first} is Array, but ${second} not`);
            return false;
        } else if (first instanceof Array && second instanceof Array) {
            if (first.length !== second.length) {
                console.log('array length not eq');
                return false;
            }
            for (let i = 0; i < first.length; i++) {
                return CommonFuncService.objectEqFirst(first[i], second[i]);
            }
            return true;
        } else if (typeof first !== typeof second) {
            console.log(`${first} , ${second}  type not eq`);
            return false;
        } else if (typeof first === 'object') {
            for (const name in first) {
                if (!second.hasOwnProperty(name)) {
                    console.log('${seocnd} not has property ${name}');
                    return false;
                } else if (!CommonFuncService.objectEqFirst(first[name], second[name])) {
                    console.log('${name} not eq: ${first[name]}---${second[name]}');
                    return false;
                }
            }
            return true;
        }
        return first === second;
    }

    public static emptyObject(object) {
        if (typeof object != 'object' || !object) {
            return '';
        }
        let newObj = {};
        for (let name of object) {
            if (typeof object[name] == 'object') {
                newObj[name] = CommonFuncService.emptyObject(object[name]);
            }
            newObj[name] = '';
        }
        return newObj;
    }

    public static mergeObject(object1, object2) {
        let ret = Object.assign({}, object1);
        for (const name in object2) {
            if (object2[name] !== null && object2[name] !== undefined && object2[name] !== '') {
                if (typeof object2[name] == 'object' && !(object2[name] instanceof Array)) {
                    ret[name] = CommonFuncService.mergeObject(ret[name], object2[name]);
                } else if (object2[name] instanceof Array) {
                    ret[name] = CommonFuncService.clone(object2[name]);
                } else {
                    ret[name] = object2[name];
                }
            }
        }
        return ret;
    }

    // 将object中的信息提取到srcObject中， 只提取srcObject已有的字段
    public static mergeFormObject(srcObject, object2) {
        if (typeof srcObject !== 'object' || !srcObject || typeof object2 !== 'object' || !object2) {
            throw new Error('srcObject is null');
        }
        for (const name in srcObject) {
            if (object2[name] !== null && object2[name] !== undefined && object2[name] !== '') {
                if (typeof object2[name] == 'object' && !(object2[name] instanceof Array)) {
                    CommonFuncService.mergeFormObject(srcObject[name], object2[name]);
                } else if (object2[name] instanceof Array) {
                    srcObject[name] = CommonFuncService.clone(object2[name]);
                } else {
                    srcObject[name] = object2[name];
                }
            }
        }
    }
}
