import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public title: string = 'Dashboard';

  constructor(private titleService: Title) {
    titleService.setTitle(new AppComponent().getTitle(this.title));
  }

  ngOnInit() {
  }

}