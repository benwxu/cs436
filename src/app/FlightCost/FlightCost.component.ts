import { Component, OnInit } from '@angular/core';

export class Address {
  public line1: string;
  public line2: string;
  public city: string;
  public state: string;
  public zipcode: string;
}

export class Student {
  public name: string;
  public email: string;
  public password: string;
  public confirmPassword: string;
  public regdate: Date;
  public major: string;
  public address: Address;
}

export class Flight{
  public originAiport: string;
  public destAiport: string;
  public travelDate: Date;
  public numPeople: number;
  public totalCost: number;
}

@Component({
  selector: 'app-flight',
  templateUrl: './FlightCost.component.html',
  styleUrls: ['./FlightCost.component.css']
})
export class FlightCostComponent implements OnInit {

  constructor() { }


  model = new Flight();

  ngOnInit(): void {
    this.model.totalCost = 0;
  }
  onSubmit(form): void {
    const unitCost = 150;
    const numPeople = form.value[`numPeople`];
    const totalPrice = unitCost * numPeople;
    const displayText = `Origination Airport: ${form.value[`originAiport`]}
Destination Airport: ${form.value[`destAiport`]}
Date of Travel: ${form.value[`travelDate`]}
Total Cost: ${totalPrice}`;
    alert(displayText);
    console.log(displayText);
    form.reset();
  }
}
