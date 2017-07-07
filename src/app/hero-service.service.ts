import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroServiceService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  gethero(id: number): Promise<Hero> {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }
}
