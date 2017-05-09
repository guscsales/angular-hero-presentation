import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { AppComponent } from '../../app.component';

import { HeroService } from '../../services/hero/hero.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  title: string = 'Detalhes do Herói';
  subTitle: string = 'Veja com mais precisão as informações';

  subscription: Subscription;

  //  Model to get the data
  id: number;
  hero: any = {};

  constructor(
    private titleService: Title,
    private heroService: HeroService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.titleService.setTitle(new AppComponent().getTitle(this.title));

    this.subscription = this.route.params.subscribe((params: any) => {
      this.id = params.id;
    });

    this.hero = this.heroService.get(this.id);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
