import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class ServItemService {
  public url = "http://localhost/back-panel/";
  public headers = new Headers({
    'Content-Type' : 'application/json; charset=UTF-8',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  });

  constructor(private http: Http) { }
  consultaResp() {
   //let url = "https://daniel-berserk-hunter.000webhostapp.com/conec.php";
   //let url = "http://localhost/p/conec.php";
   //this.url = this.url+"/connect.php";
   //let url = "http://sac.impuestos.gob.bo/panel/conec.php";
   this.url="http://sac.impuestos.gob.bo/panel/"
    return this.http.get("http://sac.impuestos.gob.bo/panel/conec.php");
  }
}
