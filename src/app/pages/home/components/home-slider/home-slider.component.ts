import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  Input,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import {
  CarouselComponent,
  CarouselModule,
  OwlOptions,
} from 'ngx-owl-carousel-o';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card.component';

@Component({
  selector: 'app-home-slider',
  imports: [CarouselModule, ProductCardComponent],
  templateUrl: './home-slider.component.html',
  styleUrl: './home-slider.component.css',
})
export class HomeSliderComponent {
  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private breakpointObserver: BreakpointObserver
  ) {
    if (this.browserOnly) {
      this.breakpointObserver
        .observe([Breakpoints.Handset])
        .subscribe((result) => {
          if (result.matches) {
            this.customOptions = {
              ...this.customOptions,
              stagePadding: 20,
              autoplay: false,
            };
          } else {
            this.customOptions = { ...this.customOptions, stagePadding: 0 };
          }
        });
    }
  }
  get browserOnly() {
    return isPlatformBrowser(this.platformId);
  }
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
      555: {
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
