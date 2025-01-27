import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { CustombtnComponent } from '../custombtn/custombtn.component';
import { SlashsvgComponent } from '../svg/slashsvg/slashsvg.component';
@Component({
  selector: 'app-home',
  imports: [CustombtnComponent, SlashsvgComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef<SwiperContainer>;

  btnVariant: string = 'btn-trans';

  slidePrev(): void {
    this.swiperContainer.nativeElement.swiper.slidePrev();
  }

  slideNext(): void {
    this.swiperContainer.nativeElement.swiper.slideNext();
  }
}
