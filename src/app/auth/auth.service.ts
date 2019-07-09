import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(login: { identifier: string, password: string }) {
    return this.http.post<{ identifier: string, password: string }>(`http://localhost:1337/auth/local`, login).subscribe(res => {
      console.log(JSON.stringify(res))
    })
  }
}