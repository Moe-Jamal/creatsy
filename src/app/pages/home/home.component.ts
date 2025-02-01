import { Component } from '@angular/core';
import { HerosliderComponent } from './components/heroslider/heroslider.component';
import { WaveSvgComponent } from '../../svg/wave-svg/wave-svg.component';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { CustombtnComponent } from '../../shared/components/custombtn/custombtn.component';
import { IBlog } from '../../shared/interfaces/iblog';

@Component({
  selector: 'app-home',
  imports: [
    HerosliderComponent,
    WaveSvgComponent,
    HomeSliderComponent,
    CustombtnComponent,
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
