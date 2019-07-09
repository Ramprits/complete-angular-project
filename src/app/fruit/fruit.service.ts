import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable()
export class FruitService {

  constructor(private http: HttpClient) { }
  getFruits(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:1337/fruits`)
  }

}