import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-ensenanzas',
  standalone: true,
  imports: [],
  templateUrl: './ensenanzas.component.html',
  styleUrl: './ensenanzas.component.css'
})
export class EnsenanzasComponent {

  constructor(){
  }
}
