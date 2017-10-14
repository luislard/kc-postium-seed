import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';

import { Post } from '../post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsListComponent {

  constructor(
    private router: Router
   ) {
     this.router.events.subscribe(event => {
      if(event instanceof NavigationStart){
        console.log('navigation start')
        
      }else if(event instanceof NavigationCancel){
        console.log('navigation cancel')
      }else if(event instanceof NavigationEnd){
        console.log('navigation end')
      }
     });
   }

  @Input() posts: Post[];

  /*=========================================================================|
  | Red Path                                                                 |
  |==========================================================================|
  | Maneja el evento del componente PostPreviewComponent que indica la       |
  | selección del autor de un post y navega a la dirección correspondiente.  |
  | Recuerda que para hacer esto necesitas inyectar como dependencia el      |
  | Router de la app. La ruta a navegar es '/posts/users', pasando como      |
  | parámetro el identificador del autor.                                    |
  |=========================================================================*/

  changeViewToEditStory(post: Post): void {
    if (post.id) {
      let postId = post.id;
      this.router.navigate(['/edit-story/'+postId]);
    }else{
      this.router.navigate(['/posts']);

    }
  }
  changeViewToPostFilteredByAuthor(post: Post): void {
    if (post.author.id) {
      let authorId = post.author.id;
      this.router.navigate(['/posts/users/'+authorId]);
    }else{
      this.router.navigate(['/posts']);

    }
  }
  
  /*=========================================================================|
  | Green Path                                                               |
  |==========================================================================|
  | Maneja el evento del componente PostPreviewComponent que indica la       |
  | selección de un post y navega a la dirección correspondiente. Recuerda   |
  | que para hacer esto necesitas inyectar como dependencia el Router de la  |
  | app. La ruta a navegar es '/posts', pasando como parámetro el            |
  | identificador del post.                                                  |
  |=========================================================================*/

  changeViewToPostDetail(post: Post): void {
    let postId = post ? post.id : '';
    this.router.navigate(['/posts/'+postId]);
  }

  

}
