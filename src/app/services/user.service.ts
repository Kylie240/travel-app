import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  checkUserByPhone(phone: string) {
    let params = new HttpParams();
    params = params.append('phone', phone);

    return this.http.get<boolean>( 'localhost:3300/User/UserCheckByPhone', {params});
  }

  checkUserByEmail(email: string) {
    let params = new HttpParams();
    params = params.append('email', email);

    return this.http.get<boolean>( 'localhost:3300/User/UserCheckByEmail', {params});
  }

  getUserByPhone(phone: string) {
    let params = new HttpParams();
    params = params.append('phone', phone);

    return this.http.get<boolean>( 'localhost:3300/User/UserGetByPhone', {params});
  }

  getUserByEmail(email: string) {
    let params = new HttpParams();
    params = params.append('email', email);

    return this.http.get<boolean>( 'localhost:3300/User/UserGetByEmail', {params});
  }
}
