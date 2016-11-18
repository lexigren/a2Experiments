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
    console.log("subtracting:", number.subtract(34));
    console.log("adding:", number.add(1));

    console.log("finalvalue: "+number);

    console.log("num:", number);
  }

}
