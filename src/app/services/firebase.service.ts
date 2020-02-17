import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { login } from '../models/login.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private  collecion : AngularFirestoreCollection<any>;
  items : Observable<any>;
  user : User;
  constructor(private afs:AngularFirestore, 
      public afsauth:AngularFireAuth) { 
    this.collecion =  afs.collection<any>('usuarios');
    //suscribirse a la promesa
     this.items = this.collecion.valueChanges();
     afsauth.authState.subscribe(data=> {
             console.log(data);
             
   //    if(data == null){
   //     return;   
   //   }else{

   //    const  auxData = data['providerData'];

   //    const dato =auxData[0];
   //      console.log(auxData);
        

   //    this.user.nombre  =  dato.displayName;
   //    this.user.uid =  dato.uid;
   //    this.collecion.add(this.user);
   //   }
          
     })
  }
  /*=============================================
  =            auth            =
  =============================================*/
   
 login(metodo:string){

   if(metodo =='google'){
    return this.afsauth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }else{
   return this.afsauth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  } 
 
  }
 logout(){
    this.afsauth.auth.signOut();
 }
  
  /*=====  End of auth  ======*/
 

}
