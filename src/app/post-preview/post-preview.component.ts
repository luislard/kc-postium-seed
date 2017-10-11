import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Post } from '../post';
import { UserService } from '../user.service';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent {

  @Input() post: Post;

  /*=========================================================================|
  | Red Path                                                                 |
  |==========================================================================|
  | Expón un atributo de salida con el decorador correspondiente. El tipo de |
  | este atributo debe permitir la emisión de eventos; la idea es enviar al  |
  | componente padre el usuario sobre el cuál se ha hecho clic. Y puesto que |
  | dicho clic se realiza en el template de este componente, necesitas,      |
  | además, un manejador para el mismo.                                      |
  |=========================================================================*/

  /*=========================================================================|
  | Green Path                                                               |
  |==========================================================================|
  | Expón un atributo de salida con el decorador correspondiente. El tipo de |
  | este atributo debe permitir la emisión de eventos; la idea es enviar al  |
  | componente padre el post sobre el cuál se ha hecho clic. Y puesto que    |
  | dicho clic se realiza en el template de este componente, necesitas,      |
  | además, un manejador para el mismo.                                      |
  |=========================================================================*/

  @Output() editButtonClicked = new EventEmitter<Post>();
  @Output() titleClicked = new EventEmitter<Post>();
  @Output() authorClicked = new EventEmitter<Post>();

  // brokenwhite

  constructor(private _userService: UserService) { }

  isOwnerOfPost(){
    return this._userService.getDefaultUser().id === this.post.author.id;
  }

  notifyEditButtonClicked(): void {
    const post: Post = this.post;
    // console.log(post);
    this.editButtonClicked.emit(post);
  }

  notifyTitleClicked(): void {
    const post: Post = this.post;
    // console.log(post);
    this.titleClicked.emit(post);
  }

  notifyAuthorClicked(): void {
    const post: Post = this.post;
    // console.log(post);
    this.authorClicked.emit(post);
  }

  plainTextToHtml(text: string): string {
    return text ? `<p>${text.replace(/\n/gi, '</p><p>')}</p>` : '';
  }

}
