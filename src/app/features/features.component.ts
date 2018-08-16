import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  arrayDays =  [
    {name: 'M', value: 'Monday', checked: false},
    {name: 'T', value: 'Tuesday', checked: false},
    {name: 'W', value: 'Wednesday', checked: false},
    {name: 'T', value: 'Thursday', checked: false},
    {name: 'F', value: 'Friday', checked: false},
    {name: 'S', value: 'Saturday', checked: false},
    {name: 'S', value: 'Sunday', checked: false},
  ];
  date: Date;
  displayPicker = false;
  constructor() { }

  ngOnInit() {
  }

  checked(value) {
    console.log(this.arrayDays);
  }
  displayTimePicker() {
    this.displayPicker = !this.displayPicker;
  }
}
