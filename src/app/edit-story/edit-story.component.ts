import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-edit-story',
  templateUrl: './edit-story.component.html',
  styleUrls: ['./edit-story.component.css']
})
export class EditStoryComponent implements OnInit {

  post: Post;

  constructor(private _postService: PostService) { 
    this._postService.getPostDetails(13).subscribe((data: Post)=>{
      console.log('data',data);
      this.post = data as Post;
    });
  }

  ngOnInit() {
  }

}
