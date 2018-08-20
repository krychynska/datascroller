import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {
  @Input() hero;
  constructor() { }

  ngOnInit() {
    console.log(this.hero, 'sibling');
  }

}
