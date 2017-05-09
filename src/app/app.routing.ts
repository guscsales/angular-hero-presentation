import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroNewComponent } from './components/hero-new/hero-new.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroEditComponent } from './components/hero-edit/hero-edit.component';

const APP_ROUTES: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'heros', component: HeroComponent },
    { path: 'hero/new', component: HeroNewComponent },
    { path: 'hero/edit/:id', component: HeroEditComponent },
    { path: 'hero/:id', component: HeroDetailComponent }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);