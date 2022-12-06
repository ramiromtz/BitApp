import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private cookieService: CookieService) {}

  deleteCookie() {
    this.cookieService.delete('taller');
  }

  getCookie() {
    const cookie = this.cookieService.getAll();
    // console.log(cookie);
  }

}
