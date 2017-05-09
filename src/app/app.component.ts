import { Component } from '@angular/core';
import { Router } from '@angular/router';

import 'rxjs/add/operator/pairwise';

import { APP_NAME } from './app.settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  appName = APP_NAME;

  constructor(
    private router?: Router
  ) {
    this.onChangeRoute();
  }

  public getTitle(title: string) {
    return title + ' - ' + APP_NAME;
  }

  private onChangeRoute(){
    if(this.router)
      this.router.events.subscribe(() => {
        $('.tooltip').remove();
      });
  }

}
