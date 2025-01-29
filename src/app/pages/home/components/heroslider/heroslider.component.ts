import { isPlatformBrowser, NgIf } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  Inject,
  PLATFORM_ID,
  QueryList,
  Renderer2,
  ViewChild,
  viewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { FabricsvgComponent } from '../../../../svg/fabricsvg/fabricsvg.component';
import { SlashsvgComponent } from '../../../../svg/slashsvg/slashsvg.component';
import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
@Component({
  selector: 'app-heroslider',
  imports: [SlashsvgComponent, FabricsvgComponent, NgIf],
  templateUrl: './heroslider.component.html',
  styleUrl: './heroslider.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
})
export class HerosliderComponent {
  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private cdr: ChangeDetectorRef,
    private renderer: Renderer2
  ) {}
  get isBrowserOnly(): boolean {
    return isPlatformBrowser(this.platformId);
  }
  @ViewChild('swiperContainer') swiperContainer!: ElementRef<SwiperContainer>;
  // heroSlider: IHeroslider[] = [
  //   {
  //     imgUrl:
  //       'https://creatsy.com/assets/modules/home/slider/slides/affiliate/slide-affiliate-md.webp',
  //     title: `Affiliate
  //      Program is Here!`,
  //     description: `Do you love sharing Creatsy’s stunning mockups with your audience?
  //         Earn up to
  //         <span class="font-bold"> 15% commission for every new customer</span>
  //         you refer and
  //         <span class="font-bold">10% for returning customers.</span>`,
  //     btnText: 'Become An Affiliate',
  //     captionColor: 'text-white',
  //     captionExist: true,
  //     captionPostion: 'caption-left',
  //   },
  //   {
  //     imgUrl:
  //       'https://creatsy.com/assets/modules/home/slider/slides/bashly/slide-bashly-md.webp',
  //     captionExist: false,
  //   },
  //   {
  //     imgUrl:
  //       'https://creatsy.com/assets/modules/home/slider/slides/box/slide-boxes2-md.webp',
  //     title: 'Freaking <br/> mockup machine',
  //     description: `We are professional graphic design studio specialized in highest quality product mockups.
  //                   We are designing PSD templates for almost each industry sector.`,
  //     btnText: 'Explore',
  //     btnPostion: false,
  //     btnVariant: 'btn-trans',
  //     captionColor: 'text-white',
  //     projectLink: 'Noissue Mailing Box Mockup Set v.1',
  //     captionExist: true,
  //   },
  //   {
  //     imgUrl:
  //       'https://creatsy.com/assets/modules/home/slider/slides/vinyls/slide-vinyls-md.webp',
  //     captionExist: false,
  //   },
  //   {
  //     imgUrl:
  //       'https://creatsy.com/assets/modules/home/slider/slides/pillow/slide-pillow2-md.webp',
  //     title: 'What <br/> is mockup?',
  //     description: `It's a digital layered file that allows you to apply patterns to a specific product.
  //                   Learn more about mockups and why they may be usefull for your business.`,
  //     btnText: 'What is Mockup',
  //     btnPostion: true,
  //     btnVariant: 'btn-trans',
  //     captionPostion: 'caption-left',
  //     projectLink: 'Velvet Cushion with Tassels Mockup Set',
  //     captionExist: true,
  //   },
  //   {
  //     imgUrl:
  //       'https://creatsy.com/assets/modules/home/slider/slides/shawl/slide-shawl2-md.webp',
  //     title: 'Creative collabs',
  //     description: `We were always focused on collaborations with other designers.
  //                   Check how it works and how to join our creative community.`,
  //     btnText: '',
  //     btnPostion: false,
  //     btnVariant: 'btn-trans',
  //     captionPostion: 'caption-left',
  //     projectLink: 'Square Silk Scarf Mockup Set (13FFv.12)',
  //     captionExist: true,
  //   },
  //   {
  //     imgUrl:
  //       'https://creatsy.com/assets/modules/home/slider/slides/fabrics/slide-fabrics2-md.webp',
  //     title: '',
  //     description: '',
  //     btnText: '',
  //     btnPostion: false,
  //     btnVariant: '',
  //     captionPostion: '',
  //     captionColor: '',
  //     projectLink: '',
  //   },
  //   {
  //     imgUrl:
  //       'https://creatsy.com/assets/modules/home/slider/slides/coffe/slide-coffee2-md.webp',
  //     title: '',
  //     description: '',
  //     btnText: '',
  //     btnPostion: false,
  //     btnVariant: '',
  //     captionPostion: '',
  //     captionColor: '',
  //     projectLink: '',
  //   },
  //   {
  //     imgUrl:
  //       'https://creatsy.com/assets/modules/home/slider/slides/cosmetics/slide-cosmetics2-md.webp',
  //     title: '',
  //     description: '',
  //     btnText: '',
  //     btnPostion: false,
  //     btnVariant: '',
  //     captionPostion: '',
  //     captionColor: '',
  //     projectLink: '',
  //   },
  //   {
  //     imgUrl:
  //       'https://creatsy.com/assets/modules/home/slider/slides/drinkware/slide-drinkware2-md.webp',
  //     title: '',
  //     description: '',
  //     btnText: '',
  //     btnPostion: false,
  //     btnVariant: '',
  //     captionPostion: '',
  //     captionColor: '',
  //     projectLink: '',
  //   },
  // ];
  btnVariant: string = 'btn-trans';
  currentIndex = 0;

  ngAfterViewInit(): void {
    const swiper = this.swiperContainer?.nativeElement?.swiper;
    if (this.isBrowserOnly) {
      swiper.on('slideChange', () => {
        this.currentIndex = swiper.realIndex;
        console.log(this.currentIndex);
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
