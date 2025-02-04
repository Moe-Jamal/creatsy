import { Component } from '@angular/core';
import { GaspAnimationDirective } from '../../directives/gasp-animation.directive';

@Component({
  selector: 'app-main-title',
  imports: [GaspAnimationDirective],
  templateUrl: './main-title.component.html',
  styleUrl: './main-title.component.css',
})
export class MainTitleComponent {}
