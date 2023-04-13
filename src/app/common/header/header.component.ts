import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public route: Router) {
    this.route.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (this.route.navigated) {
          $(".navbar").addClass('navbar-collapse collapse');
          $(".navbar").removeClass('show');
        }
      }
    });
  }


}
