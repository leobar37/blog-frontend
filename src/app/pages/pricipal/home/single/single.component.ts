import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BloApiService } from '../../../../services/blo-api.service';
import { Post } from 'src/app/pages/interfaces/post.inter';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {
  uri: String ;
  postSingle : Post;
  constructor(private activRoute :ActivatedRoute , private servicioBlog :BloApiService) { 
    this.uri = servicioBlog.uri;
    activRoute.params.subscribe(params =>{ 
        //  console.log(params['id']);
          let id  = params['id'];  
        servicioBlog.getPost(id).subscribe( post=>{ 
               this.postSingle = {
               images : this.transformUrl(post['images']),
               keywords : post['keywords'],
               id : post['_id'],
               title: post['title'],
               body : post['body'],
               autor :post['autor'],
               date : post['fechaPublicacion']
            }
           
        })
       
    })
  }

  ngOnInit() {
  }

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
