import {Component, Input} from '@angular/core';
import {Number} from "./number.class";

@Component({
  selector: 'decorators',
  templateUrl: 'decorators.component.html'
})
export class DecoratorsComponent {

  @Input()
  property;

  constructor() {
    let number = new Number(42);
    number.subtract(34);
    number.add(1);
  }

}
