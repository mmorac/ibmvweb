import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioComponent } from './inicio.component';
import { CommonModule } from '@angular/common';
import { PopupComponent } from '../popup/popup.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ],
      imports: [
        CommonModule,
        InicioComponent,
        PopupComponent,
        RouterTestingModule
      ]
    })
    .compileComponents(); 
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(InicioComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
