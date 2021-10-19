import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  model: any ={};

  heroes: Hero[] = [];
  selectedItems: Hero[] = [];

  checkMode = false;
  masterCheck = false;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();

    this.selectedItems = new Array<Hero>();
  }

  onCheckMode(){
    if (this.checkMode == false && this.heroes.length != 0) {
      this.checkMode = true;
    }
    else {
      this.checkMode = false;
    }
  }

  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero).subscribe(hero => {
      this.heroes.push(hero);
    });
  }

  checkHero(e: any, hero: Hero): void{
    if(e.target.checked){
      console.log(hero.name + ' Checked');
      this.selectedItems.push(hero);
    }
    else{
      console.log(hero.name + ' UNChecked');
      this.selectedItems = this.selectedItems.filter(h => h != hero);
      this.masterCheck = false;
    }
    console.log(this.selectedItems);
  }

  checkAll(e: any, heroes: Array<Hero>): void {
    if(e.target.checked){
      for (let hero of heroes){
        this.selectedItems.push(hero);
        hero.isSelected = true;
      }
    }
    else {
      for (let hero of heroes){
        this.selectedItems = this.selectedItems.filter(h => h != hero);
        hero.isSelected = false;
      }
    }
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  deleteSelected(heroList: Array<Hero>): void {
    for (let hero of heroList){
      this.heroes = this.heroes.filter(h => h !== hero);
      this.heroService.deleteHero(hero.id).subscribe();
    }
    if (this.heroes.length === 0) {
      this.checkMode = false;
    }
  }
}
