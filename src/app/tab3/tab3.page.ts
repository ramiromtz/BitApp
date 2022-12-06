import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  data = [1,2,3,4,5];

  constructor(private cookieService: CookieService) {}
  
  ionViewWillEnter() {
    let cookie = this.cookieService.get('taller');
    console.log(cookie);       
  }

  eliminar(id) {
    for (let i = 0; i < this.data.length + 1; i++) {
      if (this.data[id] == this.data[i]) {
        console.log(id);
      }
    }
  }

  
  

}
