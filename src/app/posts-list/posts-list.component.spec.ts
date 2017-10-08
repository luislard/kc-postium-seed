import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { PostsListComponent } from './posts-list.component';
import { PostPreviewComponent } from '../post-preview/post-preview.component';

import { FromNowPipe } from '../from-now.pipe';

//  Los bloques describe agrupamos tests que tengan 
// algun tiop de relacion
describe('PostListComponent testing del componente', () => {
  
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
        PostsListComponent,
        PostPreviewComponent,
        FromNowPipe
        
      ],
    }).compileComponents();

    // Para instanciar componentes debemos usar la funcion  createComponent de TestBed.
    //  Nos retornará un ComponentFixture<T> siendo T el tipo de componente solicitado
    fixture = TestBed.createComponent(PostsListComponent);
    component = fixture.componentInstance;

  }));
  it('debería instanciarse', async(() => {
    expect(component).toBeTruthy();
  }));
});