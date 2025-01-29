import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custombtn',
  imports: [],
  templateUrl: './custombtn.component.html',
  styleUrl: './custombtn.component.css',
})
export class CustombtnComponent {
  @Input() btnType: string = 'btn-black';
  @Input() btnLeft: boolean = false;
  @Input() btnBorderColor: string = '#dedede33';
  @Input() btnAnimation: string = '';
}
