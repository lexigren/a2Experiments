import {log, logProperty} from "./log.decorator";
import {storeLocally} from "./local-storage.decorator";
export class Number {
  @logProperty()
  @storeLocally()
  private number;

  constructor(number) {
    this.number = number;
  }

  @log(4)
  add(num) {
    return this.number += num;
  }

  @log()
  subtract(num) {
    return this.number -= num;
  }

  toString(){
    return this.number;
  }

}
