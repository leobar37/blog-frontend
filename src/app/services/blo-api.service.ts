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
  getPost(id :string){
    // let params = new HttpParams()
    // .set('id' , id );
     return this.http.get(`${this.uri}/entrada/${id}`)
     .pipe(map(data =>{
          if(!data['ok']){
            return data;
          }else{
            return data['entrada'];
          }
          
     }));
  }
}
