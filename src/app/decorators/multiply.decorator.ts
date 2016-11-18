import DecoratorsTools from "./decorators.tools";
export function multiply(factor) {
  return function (target:Object, key:string) {
    DecoratorsTools.redefineAccessors(target, key, (_get, _set)=> {
      return {
        set: function (newValue) {
          console.log("setting:",newValue)
          console.log("factor:",factor);
          _set.call(this, +newValue * factor);
        }
      }
    });
  }
}
