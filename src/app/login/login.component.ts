import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { login } from '../models/login.model';
import { FirebaseService } from '../services/firebase.service';
import { Modal } from '../mensajes/SweetAlert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  forma:FormGroup; 
    log : login; 
    cont = 0 ; 
   formReducido ;
   swal = new Modal();
  constructor(private serFireBase : FirebaseService) {
    this.cargarData();
   }

  ngOnInit() {
  }
 
  cargarData(){
     let email =  new FormControl('' ,[Validators.required ,  Validators.email ])
     let password  = new FormControl('' , [Validators.required ,Validators.minLength(6)]) 
     let  recuerdame = new FormControl (true , [Validators.required]);

     this.forma = new FormGroup( {
       email ,
      password,
      recuerdame
     })
     this.forma.valueChanges.subscribe( data =>{
          console.log( this.forma);         
     })
    this.formReducido = this.forma.controls;
  }

  login(metodo :string){

    this.serFireBase.login(metodo).then(data=>{

      this.swal.correcto('Bienvenido');
    console.log(data);
       
    }).catch(err=> {
      console.log('no valido ');
      let error = err.code;
      const cod = "auth/account-exists-with-different-credential";
      if(error == cod){
            this.swal.mostrarError('Este email ya existe');
      
      }
        
    });
  }
  entrar() {
    let logObject =  this.forma.controls;
    if(this.forma.valid){
     this.log = new login(logObject.email.value,logObject.password.value, logObject.recuerdame.value);
      console.log(this.log);
    }else{
       console.log('Formulario Invalido');
       
      return;
    }
  }
}
