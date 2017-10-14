import { Component } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent { 

  constructor(
    private router: Router,
    private route: ActivatedRoute
   ) {}

  changeRouteToPostListWithQueryParams(textToSearch){
    console.log('aqui estoy en el changeRoute');
    const snapshot = this.route.snapshot as ActivatedRouteSnapshot;
    console.log('snapshot?', snapshot);
    if(snapshot.children[0].url[0].path === 'posts' && typeof snapshot.children[0].url[1] === 'undefined'){
      console.log('apliquemos el reload de los posts', snapshot.children[0].url[0]);
      this.router.navigate(['/posts'], { queryParams: { q: textToSearch } });
    }else{
      console.log('naveguemos a la lista de posts', snapshot.children[0].url[0]);
      this.router.navigate(['/posts'], { queryParams: { q: textToSearch } });

    }
  }

}
