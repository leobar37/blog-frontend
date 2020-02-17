import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './pages/pricipal/home/home.component';
import { routesHome } from './pages/pricipal/home/routes-home';
import { EditPostComponent } from './pages/edit-post/edit-post.component';



const routes: Routes = [
  {path : 'login' , component : LoginComponent},
  { path : 'registro' , component :  RegistroComponent},
  {path : 'home' , component : HomeComponent , children : routesHome } ,
  { path : 'edit', component:  EditPostComponent},
  {path : '**' ,pathMatch : 'full'   , redirectTo : 'home/posts' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
