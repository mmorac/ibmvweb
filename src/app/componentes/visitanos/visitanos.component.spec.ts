import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { VisitanosComponent } from './visitanos.component';

describe('VisitanosComponent', () => {
  let component: VisitanosComponent;
  let fixture: ComponentFixture<VisitanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitanosComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
