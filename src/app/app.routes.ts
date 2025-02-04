import { BlogComponent } from './pages/blog/blog.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((c) => c.AboutComponent),
  },
  {
    path: 'mockups',
    loadComponent: () =>
      import('./pages/mockups/mockups.component').then(
        (c) => c.MockupsComponent
      ),
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./pages/blog/blog.component').then((c) => c.BlogComponent),
  },
  {
    path: 'freebies',
    loadComponent: () =>
      import('./pages/freebies/freebies.component').then(
        (c) => c.FreebiesComponent
      ),
  },
  {
    path: 'made-with-creatsy',
    loadComponent: () =>
      import('./pages/made-with-creatsy/made-with-creatsy.component').then(
        (c) => c.MadeWithCreatsyComponent
      ),
  },
  {
    path: 'three-d-models',
    loadComponent: () =>
      import('./pages/three-d-models/three-d-models.component').then(
        (c) => c.ThreeDModelsComponent
      ),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./pages/cart/cart.component').then((c) => c.CartComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (c) => c.NotFoundComponent
      ),
  },
];
