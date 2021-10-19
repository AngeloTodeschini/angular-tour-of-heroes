import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', alterEgo: 'John', power: 'Super Strength', isSelected: false },
      { id: 12, name: 'Narco', alterEgo: 'Maxwell', power: 'Water Control', isSelected: false },
      { id: 13, name: 'Bombasto', alterEgo: 'Hugh', power: 'Explosions', isSelected: false },
      { id: 14, name: 'Celeritas', alterEgo: 'Mary', power: 'Mind Control', isSelected: false },
      { id: 15, name: 'Magneta', alterEgo: 'Diana', power: 'Magnetism', isSelected: false },
      { id: 16, name: 'RubberMan', alterEgo: 'Richard', power: 'Elastic Body', isSelected: false },
      { id: 17, name: 'Dynama', alterEgo: 'Liliam', power: 'Fly', isSelected: false },
      { id: 18, name: 'Dr IQ', alterEgo: 'Bobby', power: 'Super Smart', isSelected: false },
      { id: 19, name: 'Magma', alterEgo: 'Carter', power: 'Fire Control', isSelected: false },
      { id: 20, name: 'Tornado', alterEgo: 'Peter', power: 'Wind Control', isSelected: false }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
  constructor() { }
}
