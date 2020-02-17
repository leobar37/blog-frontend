import { Injectable } from '@angular/core';
import { HttpClient , HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BloApiService {
   uri:String = "http://localhost:8888";
  constructor(private http : HttpClient) { }

  getPosts(){
     return this.http.get(`${this.uri}/entrada/listar`).pipe( map ( data =>{
           
       return data['docs'];

     }));
  }
}
