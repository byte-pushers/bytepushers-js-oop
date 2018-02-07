/**
 * Created by tonte on 2/5/18.
 */

declare module MBytePushers {
    export interface Main {
        implementsInterface(object:any):boolean;
        namespace(ns:string):Object;
        inherit(prototype:Object):Object;
        defineClass(classConfig:Object):Function;
        isArrayLike(array:ArrayLike):boolean;
        provides(O:any, I:any):boolean;
        enumeration(enumNames:Object):Object;
    }
}

declare var BytePushers:MBytePushers.Main;