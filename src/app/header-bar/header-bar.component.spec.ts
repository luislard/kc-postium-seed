import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { HeaderBarComponent } from './header-bar.component';
import { SearchBoxComponent } from '../search-box/search-box.component';

//  Los bloques describe agrupamos tests que tengan 
// algun tiop de relacion
describe('HeaderBarComponent testing del componente', () => {
  
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
        HeaderBarComponent,
        SearchBoxComponent
      ],
    }).compileComponents();

    // Para instanciar componentes debemos usar la funcion  createComponent de TestBed.
    //  Nos retornará un ComponentFixture<T> siendo T el tipo de componente solicitado
    fixture = TestBed.createComponent(HeaderBarComponent);
    component = fixture.componentInstance;

  }));
  it('debería instanciarse', async(() => {
    expect(component).toBeTruthy();
  }));
});

describe('HeaderBarComponent: testing del template', ( ) => { 
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
        HeaderBarComponent,
        SearchBoxComponent
      ],
    }).compileComponents();

    // Para instanciar componentes debemos usar la funcion  createComponent de TestBed.
    //  Nos retornará un ComponentFixture<T> siendo T el tipo de componente solicitado
    fixture = TestBed.createComponent(HeaderBarComponent);
    template = fixture.debugElement;

  }));
  
  it('debería tener un título con el texto Postium', () => {
    let h1 = template.query(By.css('h1'));
    let h1nativo = h1.nativeElement;
    expect(h1nativo.textContent).toBe('Postium');
  });

});