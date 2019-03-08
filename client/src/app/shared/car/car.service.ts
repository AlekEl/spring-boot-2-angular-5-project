import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  public API = '//localhost:8080';
  public CAR_API = this.API + '/cars';

  getAll(): Observable<any> {
    return this.http.get(this.API + '/cool-cars');
  }
  get(id: string) {
    return this.http.get(this.CAR_API + '/' + id)
  }

  constructor(private http: HttpClient) { }
}
