import { Component } from '@angular/core';
import { GsapAnimationDirective } from '../../directives/gsap-animation.directive';

@Component({
  selector: 'app-main-title',
  imports: [GsapAnimationDirective],
  templateUrl: './main-title.component.html',
  styleUrl: './main-title.component.css',
})
export class MainTitleComponent {}
