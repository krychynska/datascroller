import { Component, OnInit } from '@angular/core';
import {SuperheroesService} from '../shared/services/superheroes.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  heroes;
  arrayDays =  [
    {name: 'M', value: 'Monday', checked: false},
    {name: 'T', value: 'Tuesday', checked: false},
    {name: 'W', value: 'Wednesday', checked: false},
    {name: 'T', value: 'Thursday', checked: false},
    {name: 'F', value: 'Friday', checked: false},
    {name: 'S', value: 'Saturday', checked: false},
    {name: 'S', value: 'Sunday', checked: false},
  ];
  constructor(private heroesService: SuperheroesService) {
  }

  async ngOnInit() {
    this.heroes = await this.heroesService.getHeroes();
  }

  checked(value) {
     console.log(this.arrayDays);
  }
}
