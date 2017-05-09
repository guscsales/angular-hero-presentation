import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { AppComponent } from '../../app.component';

import { HeroService } from '../../services/hero/hero.service';

@Component({
  selector: 'app-hero-new',
  templateUrl: './hero-new.component.html',
  styleUrls: ['./hero-new.component.scss']
})
export class HeroNewComponent implements OnInit {

  title: string = 'Novo Herói';
  subTitle: string = 'Essa ação pode criar um novo herói com acesso ao M.A.R.V.I.N.';

  //  Model to get the data
  hero: any = {};

  constructor(
    private router: Router,
    private titleService: Title,
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.titleService.setTitle(new AppComponent().getTitle(this.title));
  }

  save() {
    //
    //  Use this to call HTTP requests.
    //  Create an instance on constructor:
    //  ********************************************
    //      import { ApiService } from './../../services/api/api.service';
    //      ...
    //      private apiService: ApiService
    //  ********************************************
    //  and use the method below:
    //    
    // this.apiService.post('hero', this.hero).then(() => {
    //   console.log('ok');
    // });
    //


    //  On our example, we're gonna use just elements on browser, like below:
    this.heroService.set(this.hero);
    this.router.navigateByUrl('heros');
  }

}
