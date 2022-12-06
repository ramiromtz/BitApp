import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  URL = environment.URL;

  constructor(private http: HttpClient) { }

  login(data: any) {
    return this.http.post(`${this.URL}/getUsers.php`, data);
  }

  addUser(user:any) {
    return this.http.post(`${this.URL}/addUser.php`, user);
  }


}
