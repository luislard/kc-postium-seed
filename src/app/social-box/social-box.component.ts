import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Post } from '../post';
import { User } from '../user';


@Component({
  selector: 'app-social-box',
  templateUrl: './social-box.component.html',
  styleUrls: ['./social-box.component.css']
})
export class SocialBoxComponent implements OnInit {

  @Input() post: Post;
  @Input() user: User;
  @Output() notifyUpdateLikes = new EventEmitter<{ action: string, post: Post,user: User }>();

  constructor() { 
    
  }

  ngOnInit() {
  }

  isLiked(){
    return this.post.likes.indexOf(this.user.id) !== -1;
  }

  manageLike(){
    if(this.isLiked()){
      
      this.notifyUpdateLikes.emit({action: 'unlike',post: this.post,user: this.user});
    }else{
      this.notifyUpdateLikes.emit({action: 'like',post: this.post,user: this.user});
    }
  }


}
