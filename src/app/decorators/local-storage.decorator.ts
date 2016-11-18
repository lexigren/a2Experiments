import DecoratorsTools from "./decorators.tools";
export function storeLocally(...params) {
  return function (target:Object, key:string) {
    DecoratorsTools.redefineAccessors(target, key, (_get, _set)=> {
      return {
        get: function () {
          let value = localStorage.getItem(key);
          try {
            return JSON.parse(value);
          } catch (e) {
            return value;
          }
        },
        set: function (newValue) {
          _set.call(this, newValue);
          let data = JSON.stringify(_get.call(this));
          localStorage.setItem(key, data);
        }
      }
    });
  }
}
