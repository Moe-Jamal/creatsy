import { Component } from '@angular/core';
import { HerosliderComponent } from '../../heroslider/heroslider.component';

@Component({
  selector: 'app-home',
  imports: [HerosliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
