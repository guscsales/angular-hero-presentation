import 'rxjs/add/operator/toPromise';

import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//  Routes
import { Routing }  from './app.routing';

//  Services
import { ApiService } from './services/api/api.service';
import { DataService } from './services/data/data.service';
import { HeroService } from './services/hero/hero.service';

//  Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroNewComponent } from './components/hero-new/hero-new.component';
import { HeroEditComponent } from './components/hero-edit/hero-edit.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroComponent,
    HeroNewComponent,
    HeroEditComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [
    Title,
    ApiService,
    DataService,
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
