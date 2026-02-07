import { Component } from '@angular/core';
import { InputGroup } from 'primeng/inputgroup';
import { CustombtnComponent } from '../../shared/components/custombtn/custombtn.component';
import { MainTitleComponent } from '../../shared/components/main-title/main-title.component';
import { IBlog } from '../../shared/interfaces/iblog';
import { WaveSvgComponent } from '../../svg/wave-svg/wave-svg.component';
import { Categories } from './../../shared/interfaces/categories';
import { HerosliderComponent } from './components/heroslider/heroslider.component';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { GsapAnimationDirective } from '../../shared/directives/gsap-animation.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HerosliderComponent,
    WaveSvgComponent,
    HomeSliderComponent,
    CustombtnComponent,
    MainTitleComponent,
    TestimonialsComponent,
    InputGroup,
    GsapAnimationDirective,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isFree: boolean = false;
  imgSrc: string =
    'https://creatsy.com/api/v1/image/0JDoWwHXD2yLFycIkhHja1BXmBB58KwhA_G8C3CCLBbrVer10p74xwsJ3oK3yyW5?width=1920';
  imgAlt: string = 'Vinyl Mockup Revolution';

  blogs: IBlog[] = [
    {
      id: 1,
      title: 'Vinyl Mockup Revolution',
      imgSrc:
        'https://creatsy.com/api/v1/image/0JDoWwHXD2yLFycIkhHja1BXmBB58KwhA_G8C3CCLBbrVer10p74xwsJ3oK3yyW5?width=1920',
      date: 'April 19, 2024',
    },
    {
      id: 2,
      title: 'Easter Templates & Mockups for Graphic Design',
      imgSrc:
        'https://creatsy.com/api/v1/image/0JDoWwHXD2yLFycIkhHja68aeh9SsSOwY8wBSaAUqdsTL_cb2HL4h7x9I3vq6zNT?width=1920',
      date: 'March 25, 2024',
    },
    {
      id: 3,
      title: 'Best Valentine’s Day Mockups for Artists',
      imgSrc:
        'https://creatsy.com/api/v1/image/0JDoWwHXD2yLFycIkhHja87GBUixo5HXM4bGzEKhr_50EdXH2a662dh287HawkpG?width=1920',
      date: 'February 9, 2024',
    },
  ];

  categories: Categories[] = [
    {
      name: 'Fabrics',
      imgSrc:
        'https://creatsy.com/assets/modules/home/category-tiles/fabrics-off-v2.webp',
      hoverImgSrc:
        'https://creatsy.com/assets/modules/home/category-tiles/fabrics-on-v2.webp',
    },
    {
      name: 'Fashion',
      imgSrc:
        'https://creatsy.com/assets/modules/home/category-tiles/fashion-off-v2.webp',
      hoverImgSrc:
        'https://creatsy.com/assets/modules/home/category-tiles/fashion-on-v2.webp',
    },
    {
      name: 'Wallart',
      imgSrc:
        'https://creatsy.com/assets/modules/home/category-tiles/wallart-off-v2.webp',
      hoverImgSrc:
        'https://creatsy.com/assets/modules/home/category-tiles/wallart-on-v2.webp',
    },
    {
      name: 'Home & Living',
      imgSrc:
        'https://creatsy.com/assets/modules/home/category-tiles/home-off-v2.webp',
      hoverImgSrc:
        'https://creatsy.com/assets/modules/home/category-tiles/home-on-v2.webp',
    },
    {
      name: 'Kids & Babies',
      imgSrc:
        'https://creatsy.com/assets/modules/home/category-tiles/kids-off-v2.webp',
      hoverImgSrc:
        'https://creatsy.com/assets/modules/home/category-tiles/kids-on-v2.webp',
    },
    {
      name: 'Drinkware',
      imgSrc:
        'https://creatsy.com/assets/modules/home/category-tiles/drinkware-off-v2.webp',
      hoverImgSrc:
        'https://creatsy.com/assets/modules/home/category-tiles/drinkware-on-v2.webp',
    },
    {
      name: 'Cosmetics & Beauty',
      imgSrc:
        'https://creatsy.com/assets/modules/home/category-tiles/cosmetics-off-v2.webp',
      hoverImgSrc:
        'https://creatsy.com/assets/modules/home/category-tiles/cosmetics-on-v2.webp',
    },
    {
      name: 'Electronics & Accessories',
      imgSrc:
        'https://creatsy.com/assets/modules/home/category-tiles/electronics-off-v2.webp',
      hoverImgSrc:
        'https://creatsy.com/assets/modules/home/category-tiles/electronics-on-v2.webp',
    },
    {
      name: 'Packaging & Wrapping',
      imgSrc:
        'https://creatsy.com/assets/modules/home/category-tiles/packaging-off-v2.webp',
      hoverImgSrc:
        'https://creatsy.com/assets/modules/home/category-tiles/packaging-on-v2.webp',
    },
  ];

  freeMokups() {
    this.isFree = true;
  }
  premiumMokups() {
    this.isFree = false;
  }
  changeBlogImg(index: number) {
    this.imgSrc = this.blogs[index].imgSrc;
    this.imgAlt = this.blogs[index].title;
  }
}
