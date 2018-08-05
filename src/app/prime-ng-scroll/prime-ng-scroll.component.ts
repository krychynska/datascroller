import {Component, OnInit} from '@angular/core';
import {SuperheroesService} from '../shared/services/superheroes.service';

@Component({
  selector: 'app-prime-ng-scroll',
  templateUrl: './prime-ng-scroll.component.html',
  styleUrls: ['./prime-ng-scroll.component.scss']
})
export class PrimeNgScrollComponent implements OnInit {
  heroes;

  constructor(private heroesService: SuperheroesService) {
  }

  async ngOnInit() {
    this.heroes = await this.heroesService.getHeroes();
    console.log(this.heroes);
  }

}
