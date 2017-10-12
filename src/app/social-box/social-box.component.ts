import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../post';


@Component({
  selector: 'app-social-box',
  templateUrl: './social-box.component.html',
  styleUrls: ['./social-box.component.css']
})
export class SocialBoxComponent implements OnInit {

  @Input() post: Post;
  constructor() { }

  ngOnInit() {
  }

}
