import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

import { HeroForm } from '../hero-form';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  powers = ['Super Strength', 'Water Control', 'Explosions', 'Mind Control', 'Magnetism', 'Elastic Body', 'Fly', 'Super Smart', 'Fire Control', 'Wind Control'];

  model = new HeroForm('', '', '');

  //submitted = false;

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  //onSubmit() { this.submitted = true; }

  newHero(name: string, alterEgo: string, power: string): void {
    name = name.trim();
    alterEgo = alterEgo.trim();
    power = power.trim();
    if (!name && !power) { return; }
    this.heroService.addHero({ name, alterEgo, power } as Hero).subscribe(hero => {
      this.heroes.push(hero);
    });
  }

  ngOnInit() {
  }

}
