import { Component } from '@angular/core';
import { Property } from '../models'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  properties: Array<Property> = [];

  constructor() {

    let property1 = new Property();
    property1.name = "One";

    let property2 = new Property();
    property2.name = "Two";

    this.properties.push(property1);
    this.properties.push(property2);
  }

}
