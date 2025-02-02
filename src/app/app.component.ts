import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProductCardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'creatsy';
}
