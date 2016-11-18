export default class DecoratorsTools {

  public static defineProperty(target, key) {

    const valueKey = '_' + key;
    let getter = function () {
      let value = this[valueKey];
      return value;
    };

    let setter = function (newValue) {
      this[valueKey] = newValue;
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });

    return Object.getOwnPropertyDescriptor(target, key);
  }

  public static getPropertyDescriptor(target, key) {
    let propertyDescriptor = Object.getOwnPropertyDescriptor(target, key);
    if (!propertyDescriptor) {
      propertyDescriptor = DecoratorsTools.defineProperty(target, key);
    }
    return propertyDescriptor;
  }

  public static redefineAccessors(target, key, newAccessorsGetter) {
    let propertyDescriptor = DecoratorsTools.getPropertyDescriptor(target, key);
    let _get = propertyDescriptor.get;
    let _set = propertyDescriptor.set;

    Object.defineProperty(target, key, newAccessorsGetter(_get, _set));
  }

}
