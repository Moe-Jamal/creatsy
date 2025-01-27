import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewEncapsulation,
} from '@angular/core';
import { CustombtnComponent } from '../custombtn/custombtn.component';
@Component({
  selector: 'app-home',
  imports: [CustombtnComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  btnVariant: string = 'btn-trans';
}
