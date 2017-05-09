import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Title } from '@angular/platform-browser';

import { AppComponent } from '../../app.component';

import { DataService, DataServiceModel } from '../../services/data/data.service';

import { HeroService } from '../../services/hero/hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  //  Headers
  title: string = 'Heróis';
  subTitle: string = 'Faça buscas, filtre resultados e gerencie de acordo com as opções';


  //  Table settings
  ds: DataServiceModel = {
    defaults: DataService.defaults,
    page: 1,
    limit: 10,
    search: '',
    order: {
      column: 1,
      dir: 'asc'
    },
    columns: [
      { key: 'id', name: '#', searchable: false, sortable: true },
      { key: 'name', name: 'Nome', searchable: true, sortable: true },
      { key: 'codename', name: 'Codinome', searchable: true, sortable: true },
      { key: 'email', name: 'E-mail', searchable: true, sortable: true },
      { key: 'created_at', name: 'Data de Cadastro', searchable: false, sortable: true },
      { key: 'updated_at', name: 'Última Alteração', searchable: false, sortable: true }
    ],
    hasActions: true
  };


  heroes: any = [];

  constructor(
    private titleService: Title,
    private dataService: DataService,
    private heroService: HeroService
  ) {
    this.heroes = heroService.all();
  }

  ngOnInit() {
    this.titleService.setTitle(new AppComponent().getTitle(this.title));
  }

  get() {
    this.heroes = this.heroService.all();
  }

  remove(id: number){
    this.heroService.remove(id);
  }
}
