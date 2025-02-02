import { isPlatformBrowser, NgIf } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { FabricsvgComponent } from '../../../../svg/fabricsvg/fabricsvg.component';
import { SlashsvgComponent } from '../../../../svg/slashsvg/slashsvg.component';
@Component({
  selector: 'app-heroslider',
  imports: [SlashsvgComponent, FabricsvgComponent, NgIf],
  templateUrl: './heroslider.component.html',
  styleUrl: './heroslider.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HerosliderComponent {
  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private cdr: ChangeDetectorRef
  ) {}
  get isBrowserOnly(): boolean {
    return isPlatformBrowser(this.platformId);
  }
  @ViewChild('swiperContainer') swiperContainer!: ElementRef<SwiperContainer>;
  btnVariant: string = 'btn-trans';
  currentIndex = 0;

  private resetAnimations(slide: HTMLElement) {
    const animatedElements = slide.querySelectorAll('.animate__animated');
    animatedElements.forEach((element) => {
      element.classList.remove('animate__animated', 'animate__fadeInUp');

      void (element as HTMLElement).offsetWidth;
      element.classList.add('animate__animated', 'animate__fadeInUp');
    });
  }

  ngAfterViewInit(): void {
    const swiper = this.swiperContainer?.nativeElement?.swiper;
    if (this.isBrowserOnly) {
      swiper.on('slideChange', () => {
        this.currentIndex = swiper.realIndex;

        setTimeout(() => {
          const activeSlide = this.swiperContainer.nativeElement.querySelector(
            '.swiper-slide-active'
          );
          if (activeSlide) {
            this.resetAnimations(activeSlide as HTMLElement);
          }
        }, 0);

        this.cdr.detectChanges();
      });
    }
  }

  slidePrev(): void {
    if (this.swiperContainer?.nativeElement?.swiper) {
      this.swiperContainer?.nativeElement?.swiper.slidePrev();
    }
  }

  slideNext(): void {
    if (this.swiperContainer?.nativeElement?.swiper) {
      this.swiperContainer?.nativeElement?.swiper.slideNext();
    }
  }
}
