import { Component, ElementRef, ViewChild } from '@angular/core';
import { IMockups } from '../imockups';
import { LogosvgComponent } from '../svg/logosvg/logosvg.component';
import { ExitsvgComponent } from '../svg/exitsvg/exitsvg.component';
import { SearchsvgComponent } from '../svg/searchsvg/searchsvg.component';
import { CartsvgComponent } from '../svg/cartsvg/cartsvg.component';
import { MenusvgComponent } from '../svg/menusvg/menusvg.component';
import { UsersvgComponent } from '../svg/usersvg/usersvg.component';
import { Tooltip } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-navbar',
  imports: [
    LogosvgComponent,
    ExitsvgComponent,
    SearchsvgComponent,
    CartsvgComponent,
    MenusvgComponent,
    UsersvgComponent,
    Tooltip,
    InputTextModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @ViewChild('searchInput') searchInput!: ElementRef;
  desktopLinks: string[] = [
    'About',
    'Mockups',
    '3D',
    'Freebies',
    'Made with Creatsy',
    'Register / Login',
  ];

  mobileLinks: string[] = [
    'About',
    'Shop',
    '3D Models',
    'Blog',
    'Freebies',
    'Made With Creatsy',
  ];

  categoriesList: string[] = [
    'All Categories',
    'Isolated Objects',
    '3D Models',
    'Mockups',
    'Print Templates',
  ];

  Mockups: IMockups[] = [
    {
      title: 'Adult Apparel',
      imgSrc:
        'https://creatsy.com/assets/images/nav/shop/categories/category-adult-apparel.jpg',
    },
    {
      title: 'Bags & Purses',
      imgSrc:
        'https://creatsy.com/assets/images/nav/shop/categories/category-bags.jpg',
    },
    {
      title: 'Books & Magazines',
      imgSrc:
        'https://creatsy.com/assets/images/nav/shop/categories/category-books.jpg',
    },
    {
      title: 'Candles',
      imgSrc:
        'https://creatsy.com/assets/images/nav/shop/categories/category-candles.jpg',
    },
    {
      title: 'Christmas',
      imgSrc:
        'https://creatsy.com/assets/images/nav/shop/categories/category-christmas.jpg',
    },
    {
      title: 'Construction',
      imgSrc:
        'https://creatsy.com/assets/images/nav/shop/categories/category-construction.jpg',
    },
    {
      title: 'Cosmetics & Beauty',
      imgSrc:
        'https://creatsy.com/assets/images/nav/shop/categories/category-cosmetics.jpg',
    },
    {
      title: 'Drinkware & Tableware',
      imgSrc:
        'https://creatsy.com/assets/images/nav/shop/categories/category-drinkware.jpg',
    },
    {
      title: 'Electronics & Accessories',
      imgSrc:
        'https://creatsy.com/assets/images/nav/shop/categories/category-electronics-and-accessories.jpg',
    },
    {
      title: 'Easter',
      imgSrc:
        'https://creatsy.com/assets/images/nav/shop/categories/category-easter.jpg',
    },
    {
      title: 'Fabrics',
      imgSrc:
        'https://creatsy.com/assets/images/nav/shop/categories/category-fabrics.jpg',
    },
    {
      title: 'Fashion Accessories',
      imgSrc:
        'https://creatsy.com/assets/images/nav/shop/categories/category-fashion-acc.jpg',
    },
    {
      title: 'Games & Puzzles',
      imgSrc:
        'https://creatsy.com/assets/images/nav/shop/categories/category-games-and-puzzles.jpg',
    },
    {
      title: 'Halloween',
      imgSrc:
        'https://creatsy.com/assets/images/nav/shop/categories/category-halloween.jpg',
    },
    {
      title: 'Home & Living',
      imgSrc:
        'https://creatsy.com/assets/images/nav/shop/categories/category-home-and-living.jpg',
    },
    {
      title: 'Hotel Supplies',
      imgSrc:
        'https://creatsy.com/assets/images/nav/shop/categories/category-hotel.jpg',
    },
    {
      title: 'Indoor & Outdoor Advertising',
      imgSrc:
        'https://creatsy.com/assets/images/nav/shop/categories/category-indoor-and-outdoor-advertising.jpg',
    },
    {
      title: 'Kids & Babies',
      imgSrc:
        'https://creatsy.com/assets/images/nav/shop/categories/category-kids-and-babies.jpg',
    },
    {
      title: 'Luggage & Travel',
      imgSrc:
        'https://creatsy.com/assets/images/nav/shop/categories/category-luggage-and-travel.jpg',
    },
    {
      title: 'Music',
      imgSrc:
        'https://creatsy.com/assets/images/nav/shop/categories/category-music2.jpg',
    },
    {
      title: 'Packaging & Wrapping',
      imgSrc:
        'https://creatsy.com/assets/images/nav/shop/categories/category-packaging-and-wrapping.jpg',
    },
    {
      title: 'Party Supplies',
      imgSrc:
        'https://creatsy.com/assets/images/nav/shop/categories/category-party-supplies.jpg',
    },
    {
      title: 'Pet Supplies & Toys',
      imgSrc:
        'https://creatsy.com/assets/images/nav/shop/categories/category-pet-supplies.jpg',
    },
    {
      title: 'Photography Equipment',
      imgSrc:
        'https://creatsy.com/assets/images/nav/shop/categories/category-photography-equipment.jpg',
    },
    {
      title: 'Paint & Draw',
      imgSrc:
        'https://creatsy.com/assets/images/nav/shop/categories/category-paint-and-draw.jpg',
    },
    {
      title: 'Pool & Beach Recreation',
      imgSrc:
        'https://creatsy.com/assets/images/nav/shop/categories/category-pool2.jpg',
    },
    {
      title: 'Prints & Wall Art',
      imgSrc:
        'https://creatsy.com/assets/images/nav/shop/categories/category-wallart.jpg',
    },
    {
      title: 'Shoes',
      imgSrc:
        'https://creatsy.com/assets/images/nav/shop/categories/category-shoes.jpg',
    },
    {
      title: 'Sport equipment & Clothing',
      imgSrc:
        'https://creatsy.com/assets/images/nav/shop/categories/category-sport.jpg',
    },
    {
      title: 'Stationery',
      imgSrc:
        'https://creatsy.com/assets/images/nav/shop/categories/category-print-and-stamping.jpg',
    },
    {
      title: 'Other Mockups',
      imgSrc:
        'https://creatsy.com/assets/images/nav/shop/categories/category-other-mockups2.jpg',
    },
    {
      title: 'All Mockups',
      imgSrc:
        'https://creatsy.com/assets/images/nav/shop/categories/category-all-mockups.jpg',
    },
  ];

  listIsOpened: boolean = false;
  myOption: string = 'All Categories';
  imageSrc: string = './category-adult-apparel.jpg';
  showDiv: boolean = true;
  activeIndex: number = 0;
  hideSearch: boolean = true;
  menuDeskOpened: boolean = false;
  menuMobOpened: boolean = false;

  openList(): void {
    this.listIsOpened = !this.listIsOpened;
  }

  selectedCategorie(index: number): void {
    this.activeIndex = index;
    this.myOption = this.categoriesList[index];
    this.searchInput.nativeElement.focus();
  }

  hideSearchDiv(): void {
    this.hideSearch = !this.hideSearch;
    this.menuDeskOpened = false;
  }

  mockupImage(index: number): void {
    this.showDiv = false;
    this.imageSrc = this.Mockups[index].imgSrc;
    setTimeout(() => {
      this.showDiv = true;
    }, 50);
  }

  openDesktopManu(): void {
    this.menuDeskOpened = true;
  }
  closeDesktopMenu(): void {
    this.menuDeskOpened = false;
  }
  openMobileManu(): void {
    this.menuMobOpened = true;
  }
  closeMobileMenu(): void {
    this.menuMobOpened = false;
  }
}
