import { Component } from '@angular/core';
import { SlideInterface } from '../../modulos/image-slider/types/slide.interface';

@Component({
  selector: 'app-declaracion',
  templateUrl: './declaracion.component.html',
  styleUrls: ['./declaracion.component.css']
})


export class DeclaracionComponent {

  name = 'Angular';

  slides: SlideInterface[] = [
    {url:'../../../assets/img/declaracion/1-Inspiracion.png', title:'Inspiración Divina de las Escrituras'},
    {url:'../../../assets/img/declaracion/2-Trinidad.png', title:'Dios Padre, Dios Hijo y Dios Espíritu Santo'}
  ]; 

  imageObject = [{
      image: '../../../assets/img/declaracion/1-Inspiracion.png',
      thumbImage: '../../../assets/img/declaracion/1-Inspiracion_t.png',
      title: 'Inspiración Divina de las Escrituras'
  }, {
    image: '../../../assets/img/declaracion/2-Trinidad.png',
    thumbImage: '../../../assets/img/declaracion/1-Inspiracion_t.png',
    title: 'Dios Padre, Dios Hijo y Dios Espíritu Santo'
}, {
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
      title: 'Example with title.'
  },{
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
      title: 'Hummingbirds are amazing creatures'
  }, {
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg',
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg'
  }, {
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
      title: 'Example two with title.'
  }];

}



// console.log(this)

