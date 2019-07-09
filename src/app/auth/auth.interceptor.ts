import { Injectable } from "@angular/core";
import { HttpClient, HttpInterceptor } from "@angular/common/http";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req, next) {
    const token = localStorage.getItem("TOKEN");
    const authRequest = req.clone({
      headers: req.headers.set("Authorization", `Bearer ${token}`)
    });
    return next.handle(authRequest);
  }
}