import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  public isNotFound: boolean;

  constructor(public translate: TranslateService,
              private router: Router) {
    // Hiding navbar in not found page
    this.router.events.subscribe(event => {
      if (event.constructor.name === 'NavigationEnd') {
        this.isNotFound = (<any>event).url.split('/').slice(-1)[0] === 'not-found';
      }
    });
  }

  ngOnInit() {
      }

}
