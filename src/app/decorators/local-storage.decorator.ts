export function storeLocally(...params) {
  return function (target:Object, key:string) {
    let getter = function () {
      let value = localStorage.getItem(key);
      try {
        return JSON.parse(value);
      } catch (e) {
        return value;
      }
    };

    let setter = function (newValue) {
      let data = JSON.stringify(newValue);
      localStorage.setItem(key, data);
    };

    if (delete  target[key]) {
      Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
      });
    }
  }
}
