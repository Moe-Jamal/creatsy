import { Component, Input, ViewChild } from '@angular/core';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselComponent } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-slider',
  imports: [CarouselModule, ProductCardComponent],
  templateUrl: './home-slider.component.html',
  styleUrl: './home-slider.component.css',
})
export class HomeSliderComponent {
  @ViewChild('owlCarousel') owlCarousel!: CarouselComponent;
  @Input() slides: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  @Input() sliderFree: boolean = false;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    autoplaySpeed: 500,
    navSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },
      720: {
        items: 2,
      },
      976: {
        items: 3,
      },
      1416: {
        items: 4,
      },
    },
    nav: false,
  };

  prev() {
    this.owlCarousel.prev();
  }

  next() {
    this.owlCarousel.next();
  }
}
