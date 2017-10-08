import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterOutlet } from '@angular/router';
import { By } from '@angular/platform-browser';

import { HeaderBarComponent } from './header-bar/header-bar.component';
import { SearchBoxComponent } from './search-box/search-box.component';

//  Los bloques describe agrupamos tests que tengan 
// algun tiop de relacion
describe('AppComponent testing del componente', () => {
  
  let component;
  let fixture;

  // los bolques beforeEach se ejecutan previamente a los bloques 'it'
  beforeEach(async(() => {

    // TestBed es el encargado de gestionar todo el entorno de testing para configurar
    // / modulo de la aplicacion en modo testing
    // usaremos la funcion  configureTestinModule, pasando como parametro el 
    // objeto de metadatos correspondiente
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HeaderBarComponent,
        SearchBoxComponent
      ],
    }).compileComponents();

    // Para instanciar componentes debemos usar la funcion  createComponent de TestBed.
    //  Nos retornará un ComponentFixture<T> siendo T el tipo de componente solicitado
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

  }));
  it('debería instanciarse', async(() => {
    expect(component).toBeTruthy();
  }));
});

describe('AppComponent: testing del template', ( ) => { 
  let fixture;
  let template;

  // los bolques beforeEach se ejecutan previamente a los bloques 'it'
  beforeEach(async(() => {

    // TestBed es el encargado de gestionar todo el entorno de testing para configurar
    // / modulo de la aplicacion en modo testing
    // usaremos la funcion  configureTestinModule, pasando como parametro el 
    // objeto de metadatos correspondiente
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HeaderBarComponent,
        SearchBoxComponent
      ],
    }).compileComponents();

    // Para instanciar componentes debemos usar la funcion  createComponent de TestBed.
    //  Nos retornará un ComponentFixture<T> siendo T el tipo de componente solicitado
    fixture = TestBed.createComponent(AppComponent);
    template = fixture.debugElement;

  }));
  
  it('debería tener un título con el texto Agenda', () => {
    let h1 = template.query(By.css('h1'));
    let h1nativo = h1.nativeElement;
    expect(h1nativo.textContent).toBe('Postium');
  });

  it('debería tener una zona dinamica donde pintar las secciones', () => {
    let routerOutlet = template.query(By.directive(RouterOutlet));
    expect(routerOutlet).toBeTruthy();
  });
});