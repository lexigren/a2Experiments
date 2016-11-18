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
