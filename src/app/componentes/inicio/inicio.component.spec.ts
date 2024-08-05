import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioComponent } from './inicio.component';
import { CommonModule } from '@angular/common';
import { PopupComponent } from '../popup/popup.component';

describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ],
      imports: [
        CommonModule,
        InicioComponent,
        PopupComponent
      ]
    })
    .compileComponents(); 
  });

  it('should create', () => {
    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
