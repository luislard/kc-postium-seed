import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent { 

  constructor(
    private router: Router
   ) {}

  changeRouteToPostListWithQueryParams(textToSearch){
    console.log('aqui estoy en el changeRoute');
    this.router.navigate(['/posts'], { queryParams: { q: textToSearch } });
  }

}
