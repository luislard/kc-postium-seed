import { Component, Inject, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { NativeWindow } from '../window';
import { Post } from '../post';
import { User } from '../user';
import { Category } from '../category';

import { UserService } from '../user.service';
import { PostService } from '../post.service';

@Component({
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: Post;
  user: User;

  constructor(
    private _userService: UserService,
    private _postService: PostService,
    private _activatedRoute: ActivatedRoute,
    private router: Router,
    @Inject(NativeWindow) private _window) {
      this.user = this._userService.getDefaultUser();
    }

  ngOnInit(): void {
    this._activatedRoute
        .data
        .subscribe((data: { post: Post }) => {
          this.post = data.post;
          this._window.scrollTo(0, 0);
        });
  }

  plainTextToHtml(text: string): string {
    return text ? `<p>${text.replace(/\n/gi, '</p><p>')}</p>` : '';
  }

  /*=========================================================================|
  | Red Path                                                                 |
  |==========================================================================|
  | Añade un manejador que navegue a la dirección correspondiente a los      |
  | posts del autor indicado. Recuerda que para hacer esto necesitas         |
  | inyectar como dependencia el Router de la app. La ruta a navegar es      |
  | '/posts/users', pasando como parámetro el identificador del autor.       |
  |=========================================================================*/

  changeViewToPostFilteredByAuthor(): void {
      
    let authorId = this.post.author.id;
    this.router.navigate(['/posts/users/'+authorId]);
    
  }
  /*=========================================================================|
  | Yellow Path                                                              |
  |==========================================================================|
  | Añade un manejador que navegue a la dirección correspondiente a los      |
  | posts de la categoría indicada. Recuerda que para hacer esto necesitas   |
  | inyectar como dependencia el Router de la app. La ruta a navegar es      |
  | '/posts/categories', pasando como parámetro el identificador de la       |
  | categoría.                                                               |
  |=========================================================================*/

  changeViewToPostFilteredByCategory(category: Category): void {
    let categoryId = category.id;
    this.router.navigate(['/posts/categories/'+categoryId]);
    
  }

  updateLikes(object){
    let updatedPost: Post = object.post;
    let updatedLikesArray = updatedPost.likes;
    if(object.action === 'like'){
      updatedLikesArray.push(object.user.id);
      updatedPost.likes = updatedLikesArray;
    }else if(object.action === 'unlike'){
      if(updatedLikesArray.indexOf(object.user.id) !== -1){
        updatedLikesArray.splice(updatedLikesArray.indexOf(object.user.id),1);
      }else{
        return;
      }
    }
    this._postService.updatePost(updatedPost).subscribe(data=>{
      this.post = data;
    });
  }

}
