import {Component, Input, OnInit} from '@angular/core';
import {SuperheroesService} from '../shared/services/superheroes.service';

@Component({
  selector: 'app-ngx-infinite-scroll',
  templateUrl: './ngx-infinite-scroll.component.html',
  styleUrls: ['./ngx-infinite-scroll.component.scss']
})
export class NgxInfiniteScrollComponent implements OnInit {
  @Input() heroes;
  selector = '.main-panel';
  constructor(private heroesService: SuperheroesService) {
  }

  ngOnInit() {
  }

  async onScroll() {
   console.log('crolled');
    this.heroes = this.heroes.concat(this.heroes);
  }

  async reset() {
    this.heroes = [];
    this.heroes = await this.heroesService.getHeroes();
  }

}
