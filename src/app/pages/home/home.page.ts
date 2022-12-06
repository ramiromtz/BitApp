import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private cookieService: CookieService,
              private route: Router) { }

  ngOnInit() {
    this.cookieService.deleteAll();
  }

  setCookie(taller: number):void {
    this.cookieService.set('taller', taller.toString());
    this.route.navigate(['/tabs/tab1']);
  }

}
