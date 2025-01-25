import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logosvg',
  imports: [],
  templateUrl: './logosvg.component.html',
  styleUrl: './logosvg.component.css',
})
export class LogosvgComponent {
  @Input() logoColor: string = '';
  @Input() logoSize: string = '';
}
