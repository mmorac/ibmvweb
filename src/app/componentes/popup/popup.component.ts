import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'  
})
export class PopupComponent implements OnInit {

  showPopup: boolean = true;

  ruta_imagen = "../../../assets/img/vbs.jpeg";
  constructor() { 
  }

  ngOnInit(): void {
    const popupShown = localStorage.getItem('popupShown');
    console.log('popupShown:', popupShown); // Log para verificar el estado
    if (!popupShown) {
      this.showPopup = true;
      localStorage.setItem('popupShown', 'true');
    }
    console.log('showPopup:', this.showPopup); // Log para verificar el estado
  }

  closePopup(): void {
    this.showPopup = false;
  }  
}
