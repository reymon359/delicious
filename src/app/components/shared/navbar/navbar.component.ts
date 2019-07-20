import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  
  public location;

  constructor(public translate: TranslateService) { }

  ngOnInit() {
    this.location = window.location.href;
  }

}
