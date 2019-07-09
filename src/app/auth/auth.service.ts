import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }
  get isAuthenticated() {
    return !!localStorage.getItem("TOKEN");
  }
  login(login: { identifier: string, password: string }) {
    return this.http.post<{ identifier: string, password: string }>(`http://localhost:1337/auth/local`, login).subscribe(res => {
      this.authenticated(res.jwt);
    })
  }

  authenticated(res) {
    localStorage.setItem("TOKEN", res);
    this.router.navigate(["/home"]);
  }
}