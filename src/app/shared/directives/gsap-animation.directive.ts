import { isPlatformBrowser } from '@angular/common';
import {
  Directive,
  ElementRef,
  Input,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Directive({
  selector: '[gsapAnimate]',
})
export class GsapAnimationDirective implements AfterViewInit {
  @Input() animationType: string = '';
  @Input() delay: number = 0;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: string
  ) {}

  get isBrowserOnly() {
    return isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit() {
    if (this.isBrowserOnly) {
      const element = this.el.nativeElement;
      let animationOptions: gsap.TweenVars = {};
      switch (this.animationType) {
        case 'fade-up':
          animationOptions = { opacity: 0, y: 50 };
          break;
        case 'fade-down':
          animationOptions = { opacity: 0, y: -50 };
          break;
        case 'fade-left':
          animationOptions = {
            opacity: 0,
            x: '-100vw',
            onUpdate: () => {
              this.el.nativeElement.style.setProperty(
                'transform',
                this.el.nativeElement.style.transform,
                'important'
              );
            },
          };
          break;
        case 'fade-right':
          animationOptions = {
            opacity: 0,
            x: '100vw',
            onUpdate: () => {
              this.el.nativeElement.style.setProperty(
                'transform',
                this.el.nativeElement.style.transform,
                'important'
              );
            },
          };
          break;
        case 'scale':
          animationOptions = { opacity: 0, scale: 0.5 };
          break;
        case 'rotate':
          animationOptions = { opacity: 0, rotate: -360 };
          break;
        case 'skew':
          animationOptions = { opacity: 0, skewX: 30 };
          break;
        case 'bounce':
          animationOptions = { opacity: 0, y: 50, ease: 'bounce.out' };
          break;
        default:
          animationOptions = { opacity: 0, rotate: 360 };
      }

      gsap.from(element, {
        ...animationOptions,
        duration: 1,
        delay: this.delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'top 40%',
          toggleActions: 'play none none none',
        },
      });
    }
  }
}
