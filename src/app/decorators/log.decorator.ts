import DecoratorsTools from "./decorators.tools";
export function log(...params) {
  console.log("params:", params);
  return function log(target:Object, key:string, descriptor:TypedPropertyDescriptor<any>) {
    let orinalMethod = descriptor.value;

    descriptor.value = function () {
      console.log('"' + key + '" was called with:');
      console.log(arguments);
      let result = orinalMethod.apply(this, arguments);
      console.log("result:", result);
      return result;
    };

    return descriptor;
  };
}

export function logProperty(...params) {
  return function (target:Object, key:string) {

    DecoratorsTools.redefineAccessors(target, key, (_get, _set)=> {
      console.log("get,set:",_get,_set);
      return {
        get: function () {
          let value = _get.call(this);
          console.log("get " + key + ":" + value);
          return value;
        },
        set: function (newValue) {
          console.log("set " + key + ":" + newValue);
          _set.call(this, newValue);
        }
    }
    });

    // let propertyDescriptor = DecoratorsTools.getPropertyDescriptor(target, key);
    //
    // console.log("property descriptor:", propertyDescriptor);
    //
    // let _get = propertyDescriptor.get;
    // let _set = propertyDescriptor.set;
    //
    // let getter = function () {
    //   let value = _get.call(this);
    //   console.log("get " + key + ":" + value);
    //   return value;
    // };
    //
    // let setter = function (newValue) {
    //   console.log("set " + key + ":" + newValue);
    //   _set.call(this, newValue);
    // };
    //
    // Object.defineProperty(target, key, {
    //   get: getter,
    //   set: setter
    // });
    // // propertyDescriptor.get = getter;
    // // propertyDescriptor.set = setter;


    // console.log("decorator function args:",arguments);
    // const valueKey = '_' + key;
    // let getter = function () {
    //   let value = this[valueKey];
    //   console.log("get " + key + ":" + value);
    //   return value;
    // };
    //
    // let setter = function (newValue) {
    //   console.log("set " + key + ":" + newValue);
    //   this[valueKey] = newValue;
    // };
    //
    // console.log("existing key:",target[key]);
    // console.log("own property descriptor:",Object.getOwnPropertyDescriptor(target,key));
    // if (delete  target[key]) {
    //   Object.defineProperty(target, key, {
    //     get: getter,
    //     set: setter,
    //     enumerable: true,
    //     configurable: true
    //   });
    // }
  }
}


// export default function log(target:Object, key:string, descriptor:TypedPropertyDescriptor<any>) {
//   let orinalMethod = descriptor.value;
//
//   descriptor.value = function () {
//     console.log('"' + key + '" was called with:');
//     console.log(arguments);
//     return orinalMethod.apply(this, arguments);
//   };
//
//   return descriptor;
// }
//
