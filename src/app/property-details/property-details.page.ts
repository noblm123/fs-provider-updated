import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from '../models'

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.page.html',
  styleUrls: ['./property-details.page.scss'],
})
export class PropertyDetailsPage implements OnInit {

  private propertyId: number;
  public nameOfProperty: string;
  public currentyProperty: Property;

  public properties: Array<Property> = [];
  
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    let recievedQueryParams = function(data) {
      console.log(data);
      console.log(data.params.propertyName)

      this.nameOfProperty = data.params.propertyName;
      this.propertyId = data.params.propertyId

      this.properties.forEach(
      (property: Property) => {
        if (property.id == this.peropertyId) {
          // display this property
          this.currentyProperty = property;
        }
      }
      )
    }

    let arrow = (data: any) => {
      this.nameOfProperty = data.params.propertyName;

    };

    this.activatedRoute.queryParamMap.subscribe(
      //recievedQueryParams
      arrow
    );
  }

}
