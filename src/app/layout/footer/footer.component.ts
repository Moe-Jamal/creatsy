import { LogosvgComponent } from './../../svg/logosvg/logosvg.component';
import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-footer',
  imports: [LogosvgComponent, AccordionModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: string) {}

  get isBrowserOnly(): boolean {
    return isPlatformBrowser(this.platformId);
  }
  brandColor: string = '#191919';
  brandSize: string = 'w-[150px]';
  btnVariant: string = 'btn-black';
  theCompany: string[] = [
    'About',
    'Contact us',
    'Brand guidelines',
    'Made with Creatsy',
    'Creative Collabs',
  ];
  resources: string[] = [
    'Affiliate Program',
    'Help center',
    'What is a mockup?',
    'Blog',
  ];
  policies: string[] = [
    'Licenses',
    'Terms of Use',
    'Affiliate Terms',
    'Privacy Policy',
    'Cookies Policy',
    'Cookie Settings',
  ];

  isDesktop: boolean = true;

  ngOnInit(): void {
    this.cheackScreenSize();
  }
  cheackScreenSize() {
    if (this.isBrowserOnly) {
      if (window.innerWidth < 1024) {
        this.isDesktop = false;
      } else {
        this.isDesktop = true;
      }
    }
  }
  @HostListener('window:resize', [])
  desktopMode(): void {
    this.cheackScreenSize();
  }
}
