import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { ChatComponent } from './components/chat/chat.component';

import { RegistroComponent } from './components/registro/registro.component';
import { FormsModule ,  ReactiveFormsModule} from '@angular/forms';
import { ErrorsMenssageComponent  } from './components/shared/errors-menssage/errors-menssage.component';

//angular Fire 2
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { FirebaseService } from './services/firebase.service';
import { HomeComponent } from './pages/pricipal/home/home.component';
import { PostsComponent } from './pages/pricipal/home/posts/posts.component';
import { SingleComponent } from './pages/pricipal/home/single/single.component';
import { EditPostComponent } from './pages/edit-post/edit-post.component';
import { HttpClientModule } from '@angular/common/http';
//servicios
import { BloApiService } from '../app/services/blo-api.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent,
    RegistroComponent,
    ErrorsMenssageComponent,
    HomeComponent,
    PostsComponent,
    SingleComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule, // dynamically imports firebase/analytics
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule ,
    HttpClientModule
  ],
  providers: [
     FirebaseService,
     BloApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
