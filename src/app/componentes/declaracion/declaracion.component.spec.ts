import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgImageSliderModule } from 'ng-image-slider';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { DeclaracionComponent } from './declaracion.component';

describe('DeclaracionComponent', () => {
  let component: DeclaracionComponent;
  let fixture: ComponentFixture<DeclaracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        DeclaracionComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeclaracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(true).toBeTruthy();
  });
});
