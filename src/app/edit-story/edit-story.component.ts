import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-story',
  templateUrl: './edit-story.component.html',
  styleUrls: ['./edit-story.component.css']
})
export class EditStoryComponent implements OnInit {

  post: Post;
  id: number;

  constructor(
      private _postService: PostService,
      route: ActivatedRoute) { 
    this.id = parseInt(route.snapshot.params.postId);
    this._postService.getPostDetails(this.id).subscribe((data: Post)=>{
      this.post = data as Post;
    });
  }

  ngOnInit() {
  }

  updatePost(post: Post){
    post.id = this.id;
    this._postService.updatePost(post).subscribe(data=>{
      console.log('Hemos actualizado el post: ', data);
    });
  }

}
