import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {data} from './data';

@Injectable({
  providedIn: 'root'
})
export class SuperheroesService {

  constructor(private httpClient: HttpClient) { }

  getHeroes() {
    return data;
  }
  getHeroesLazy(offset, limit) {
    return this.httpClient.get(`url/${offset}/url/${limit}`);
   // return data;
  }
}
