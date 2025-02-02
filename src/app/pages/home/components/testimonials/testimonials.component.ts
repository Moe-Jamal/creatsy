import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ThankYouSvgComponent } from '../../../../svg/thank-you-svg/thank-you-svg.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  imports: [ThankYouSvgComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: string) {}
  activeIndex: number = 0;

  testimonials = [
    {
      text: `Creatsy makes the best mockups. They are so much more than a photo with a wonky overlay that you find in a lot of mockups. 
        All the files are complex, but organized, and allow you to modify everything realistically and professionally.`,
      designer: 'Acorn and Thistle Design',
    },
    {
      text: 'Graphic design will forever be known as pre and post @creatsyofficial mockups',
      designer: 'Sydney Newsom / @sydneynewsomcreative',
    },
    {
      text: 'I love the mockups by Creatsy for many reasons. The main ones are the high quality, the second one the infinite customization possibilities',
      designer: 'Loupen Design Studio',
    },
    {
      text: `One of my favourite parts of surface design is playing with mock-ups that help visualize 
        your artwork come to life on products that you dream working with... like this baby pjs, how cute is this!?? @creatsyofficial has the best and easy to use mock-ups!`,
      designer: 'Mandarina Designs',
    },
    {
      text: `Simply the best in the business. If you need mockups to bring your creations alive these are the people to go to. Thank you @creatsyofficial!`,
      designer: 'Oh Beehave',
    },
    {
      text: `@creatsyofficial is my favourite place to shop for professional looking mockups. They fit well with trends in today's market while also being timeless.`,
      designer: 'Tiffany Hargis (Hargis Studio)',
    },
  ];
  intervalId: any;

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.intervalId = setInterval(() => {
        this.activeIndex = (this.activeIndex + 1) % this.testimonials.length;
      }, 3000);
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
