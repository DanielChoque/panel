import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class ServItemService {
  public headers = new Headers({
    'Content-Type' : 'application/json; charset=UTF-8',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  });

  constructor(private http: Http) { }
  consultaResp() {
    let url = "http://localhost/p/conec.php";
    return this.http.get(url);
  }
}
