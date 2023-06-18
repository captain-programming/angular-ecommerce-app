import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-component',
  templateUrl: './carousel-component.component.html',
  styleUrls: ['./carousel-component.component.css']
})
export class CarouselComponentComponent {
  images = [
    { src: '../../assets/carousel/image1.jpg', alt: 'Image 1', caption: 'Caption 1' },
    { src: '../../assets/carousel/image2.jpg', alt: 'Image 2', caption: 'Caption 2' },
    { src: '../../assets/carousel/image3.jpg', alt: 'Image 3', caption: 'Caption 3' },
  ];
}
