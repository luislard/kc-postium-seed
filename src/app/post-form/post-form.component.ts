import { Component, EventEmitter, Output, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Post } from '../post';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {

  postForm: FormGroup;

  isValid: Boolean;

  postValue: Post;

  @Input() submitButtonText: string; 
  @Input() post: Post; 
  @Output() postSubmitted: EventEmitter<Post> = new EventEmitter();

  constructor(
    private _userService: UserService,
    private _formBuilder: FormBuilder) {
      this.createForm();
    }

  private createForm() {

    /*=========================================================================|
    | Purple Path                                                              |
    |==========================================================================|
    | Define para este FormGroup los objetos FormControl correspondientes a    |
    | las propiedades 'title', 'intro' y 'body' de los posts. Los dos primeros |
    | son obligatorios, así que recuerda añadir el validador oportuno.         |
    |=========================================================================*/

    this.postForm = this._formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      intro: ['', [Validators.required, Validators.minLength(4)]],
      body: ['', [Validators.required, Validators.minLength(4)]]
      
    });
    
  }

  ngOnChanges(){
    if(this.post){
      this.postForm.patchValue({
        title: this.post.title || '',
        intro: this.post.intro || '',
        body: this.post.body || ''
      });
    }
    this.isFormInvalid();
  }

  emitPostSubmitted(): void {
    const post: Post = this.postForm.value;
    post.likes = [];
    post.categories = [];
    post.author = this._userService.getDefaultUser();
    post.publicationDate = Date.now();
    this.postSubmitted.emit(post);
  }

  isFormInvalid(){
    this.isValid = !this.postForm.invalid;
    return this.postForm.invalid;
  }

}
