import { Injectable } from '@angular/core';

import { StorageService } from '../storage/storage.service';

@Injectable()
export class HeroService {

  heroes: any = [];
  storageName: string = 'heroes';

  constructor() { 
    this.heroes = StorageService.get(this.storageName);

    if(this.heroes.length == 0)
      this.createHeroes();

  }

  all() {
    return this.heroes;
  }

  get(id: number) {
    return this.heroes.filter(function (hero) {
      return hero.id == id;
    })[0];
  }

  set(hero: any) {
    hero.id = this.getNextId();
    hero.created = new Date();
    hero.updated = new Date();

    this.heroes.push(hero);

    StorageService.set(this.storageName, this.heroes);
  }

  update(hero: any){
    this.heroes.filter(function (_hero) {
      if(_hero.id == hero.id){
        _hero = hero;
        _hero.updated = new Date();               

        return true;
      }
    });    

    StorageService.set(this.storageName, this.heroes);
  }

  remove(id: number){
    let index = -1;

    this.heroes.filter(function (hero, i) {
      if(hero.id == id){
        index = i;

        return true;
      }
    }); 

    this.heroes.splice(index, 1);

    StorageService.set(this.storageName, this.heroes);

    $('.tooltip').remove();
  }

  private getNextId(){
    return this.heroes.length + 1;
  }

  private createHeroes(){
    this.heroes = [
      {
        'id': 1,
        'name': 'Bruce Wayne',
        'email': 'batman@uolinc.com',
        'codename': 'Batman',
        'created': new Date(),
        'updated': new Date()
      },
      {
        'id': 2,
        'name': 'Peter Parker',
        'email': 'spiderman@uolinc.com',
        'codename': 'Spider-Man',
        'created': new Date(),
        'updated': new Date()
      },
      {
        'id': 3,
        'name': 'Thor',
        'email': 'Thor@uolinc.com',
        'codename': 'Thor',
        'created': new Date(),
        'updated': new Date()
      },
      {
        'id': 4,
        'name': 'Diana',
        'email': 'wonder@uolinc.com',
        'codename': 'Wonder Woman',
        'created': new Date(),
        'updated': new Date()
      },
      {
        'id': 5,
        'name': 'Steve Rogers',
        'email': 'captain@uolinc.com',
        'codename': 'Captain America',
        'created': new Date(),
        'updated': new Date()
      },
      {
        'id': 6,
        'name': 'Logan',
        'email': 'wolverine@uolinc.com',
        'codename': 'Wolverine',
        'created': new Date(),
        'updated': new Date()
      }
    ]

    StorageService.set(this.storageName, this.heroes);
  }

}
