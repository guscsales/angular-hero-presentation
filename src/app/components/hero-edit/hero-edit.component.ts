import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

import { AppComponent } from '../../app.component';

import { HeroService } from '../../services/hero/hero.service';

import { Subscription } from 'rxjs';


@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.scss']
})
export class HeroEditComponent implements OnInit {
  title: string = 'Atualizar Herói';
  subTitle: string = 'Essa ação pode atualizar os dados de um herói';

  subscription: Subscription;

  //  Model to get the data
  id: number;
  hero: any = {};

  constructor(
    private router: Router,
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

  save() {
    //  On our example, we're gonna use just elements on browser, like below:
    this.heroService.update(this.hero);

    this.router.navigateByUrl('heros');
  }

}
