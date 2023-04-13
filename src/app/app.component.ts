import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce';
  constructor(public router:Router){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('Current route state:', this.router.routerState.root.snapshot);
      }
    });
  }
}
