import {log, logProperty} from "./log.decorator";
import {storeLocally} from "./local-storage.decorator";
import {multiply} from "./multiply.decorator";
export class Number {
  @logProperty()
  @storeLocally()
  @multiply(2)
  private number;

  constructor(number) {
    this.number = number;
  }

  @log(4)
  add(num) {
    // return this.number += num;
    this.number += num;
    return this.number;
  }

  @log()
  subtract(num) {
    // return this.number -= num;
    this.number -= num;
    return this.number;
  }

  toString() {
    return this.number;
  }

}
