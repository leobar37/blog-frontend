import { Component, OnInit } from '@angular/core';
import { BloApiService } from 'src/app/services/blo-api.service';
import { Post } from '../../../interfaces/post.inter';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts : Post[]=[];
  uri: String ;
  constructor(private serviceBlog :  BloApiService) { 
     this.uri = serviceBlog.uri;  
    serviceBlog.getPosts().subscribe(data => {
         if(data){
          
          for(const attrib in data){
            let postAux = data[attrib];
            let post : Post = {
               images : this.transformUrl(postAux['images']),
               id  : postAux['_id'],
               title : postAux['title'],
               body : postAux['body'],
               extracto : postAux['extracto'],
               autor : postAux['autor'],
               date : postAux['fechaPublicacion']
            }
            this.posts.push(post);
          }
         }
         console.log('------los nuevos posts');
         
         console.log(this.posts);
         
      })
  }

  ngOnInit() {
  }
//helpers
transformUrl(images:string[]): string[]{
   let imageNew = [];
  for(const key in images){
   
     let path = `${this.uri}/${images[key]}`
     console.log(path);
     
     imageNew.push(path);
  }
 
  return imageNew;
}


}
