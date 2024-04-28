import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { MinisteriosComponent } from './ministerios.component';
import { of } from 'rxjs';

describe('MinisteriosComponent', () => {
  let component: MinisteriosComponent;
  let fixture: ComponentFixture<MinisteriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinisteriosComponent ],
      providers: [
        // Proveedor simulado de ActivatedRoute
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ ministerio: 'hombres' }) // Simula un parámetro en la ruta
            },
            params: of({ ministerio: 'hombres' }) // Simula los parámetros observables
          }
        }
      ]
    })
    .compileComponents()
  });

  beforeEach(() => {
      fixture = TestBed.createComponent(MinisteriosComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
  });    

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
