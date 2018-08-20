import {Component, Input, OnInit} from '@angular/core';
import {SuperheroesService} from '../shared/services/superheroes.service';

@Component({
  selector: 'app-prime-ng-scroll',
  templateUrl: './prime-ng-scroll.component.html',
  styleUrls: ['./prime-ng-scroll.component.scss']
})
export class PrimeNgScrollComponent implements OnInit {
  @Input() heroes;
  selectedItem;
  constructor(private heroesService: SuperheroesService) {
  }

  async ngOnInit() {
    // this.heroes = await this.heroesService.getHeroes();
    // console.log(this.heroes);
  }
  // for lazy load data

 async loadData(event) {
    console.log(event);
    const offset = event.first;
    const limit = event.limit;
    this.heroes = await this.heroesService.getHeroesLazy(offset, limit);
   // in real application you would have to add new data that comes from server to existing array of heroes (filter, concat)
  }

  setHero(hero) {
    this.selectedItem = hero;
  }
}
