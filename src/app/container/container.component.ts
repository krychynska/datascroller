import { Component, OnInit } from '@angular/core';
import {SuperheroesService} from '../shared/services/superheroes.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  heroes;
  constructor(private heroesService: SuperheroesService) {
  }

  async ngOnInit() {
    this.heroes = await this.heroesService.getHeroes();
  }


}
