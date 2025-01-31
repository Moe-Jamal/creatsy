import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartsvgComponent } from '../../../svg/cartsvg/cartsvg.component';
import { HeartsvgComponent } from '../../../svg/heartsvg/heartsvg.component';
import { CompareSvgComponent } from '../../../svg/comparesvg/comparesvg.component';
import { LeftArrowSvgComponent } from '../../../svg/leftarrowsvg/leftarrowsvg.component';
import { RightArrowSvgComponent } from '../../../svg/rightarrowsvg/rightarrowsvg.component';

@Component({
  selector: 'app-product-card',
  imports: [
    CommonModule,
    CartsvgComponent,
    HeartsvgComponent,
    CompareSvgComponent,
    LeftArrowSvgComponent,
    RightArrowSvgComponent,
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
  standalone: true,
})
export class ProductCardComponent implements AfterViewInit {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLElement>;
  currentImageIndex = 0;

  images: string[] = [
    'https://picsum.photos/1920/1080.webp',
    'https://picsum.photos/1920/1081.webp',
    'https://picsum.photos/1920/1082.webp',
  ];

  ngAfterViewInit() {
    this.scrollContainer.nativeElement.addEventListener('scroll', () => {
      const scrollLeft = this.scrollContainer.nativeElement.scrollLeft;
      const itemWidth = this.scrollContainer.nativeElement.clientWidth;
      this.currentImageIndex = Math.round(scrollLeft / itemWidth);
    });
  }

  scrollNext() {
    const container = this.scrollContainer.nativeElement;
    const itemWidth = container.clientWidth;

    if (this.currentImageIndex === this.images.length - 1) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: itemWidth, behavior: 'smooth' });
    }
  }

  scrollPrev() {
    const container = this.scrollContainer.nativeElement;
    const itemWidth = container.clientWidth;

    if (this.currentImageIndex === 0) {
      container.scrollTo({
        left: itemWidth * (this.images.length - 1),
        behavior: 'smooth',
      });
    } else {
      container.scrollBy({ left: -itemWidth, behavior: 'smooth' });
    }
  }
}
