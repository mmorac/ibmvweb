import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsenanzasComponent } from './ensenanzas.component';

describe('EnsenanzasComponent', () => {
  let component: EnsenanzasComponent;
  let fixture: ComponentFixture<EnsenanzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnsenanzasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnsenanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
