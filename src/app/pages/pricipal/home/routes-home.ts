import { Routes} from '@angular/router';
import { SingleComponent } from './single/single.component';
import { PostsComponent } from './posts/posts.component';


export const routesHome: Routes = [
    {path:'post/:id' , component : SingleComponent},
    {path : 'posts' , component : PostsComponent},
    {path : '**' , pathMatch : 'full' ,  redirectTo : 'home'}
];
