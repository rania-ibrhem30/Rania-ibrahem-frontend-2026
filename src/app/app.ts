import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/components/navbar/navbar';
import { TranslateModule } from '@ngx-translate/core';
import { Footer } from "./shared/components/footer/footer";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, TranslateModule, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',

})
export class App {
  protected readonly title = signal('portfolio');
  // 1. مفاتيح الترجمة للخبرة المهنية
  experienceKeys = ['geekyAir'];
  pointIndexes = [0, 1];

  // 2. مصفوفة المشاريع كاملة مع الـ IDs والصور والـ Tags
  projects = [
    {
      id: 'slogantodo',
      tech: ['Angular 17', 'JWT Auth', 'Lazy Loading', 'RxJS', 'PrimeNG'],
      image: 'todo.png',
      link: '#'
    },
    {
      id: 'slogansocial',
      tech: ['Angular 17', 'Gmail Sequencer', 'Chart.js', 'Angular Material', 'PrimeNG'],
      image: 'slogansocial.png',
      link: '#'
    },
    {
      id: 'helloflow',
      tech: ['Angular 17', 'RxJS Observables', 'PrimeNG', 'JWT Auth', 'ngx-cookie-service'],
      image: 'helloflow.png',
      link: 'https://github.com/rania-ibrhem30'
    },
    {
      id: 'geekyair_portal',
      tech: ['Angular 17', 'JWT Auth', 'RBAC', 'Upwork API', 'Material Design'],
      image: 'geeky.png',
      link: '#'
    }
    ,
    {
      id: 'sigma',
      tech: ['Angular v17', 'Metronic UI', 'RxJS State', 'Lazy Loading', 'Leaflet Maps'],
      image: 'sigma.png',
      link: '#'
    },

    {
      id: 'maps',
      tech: ['Angular 17', 'SSR', 'Google Maps API'],
      image: 'maps.png',
      link: '#'
    },
    {
      id: 'rebamp',
      tech: ['Angular 16', 'AI Integration', 'Tailwind/CSS'],
      image: 'rebamp.png',
      link: 'https://re-bamp.vercel.app/home'
    },

    {
      id: 'noxe',
      tech: ['Angular', 'JWT', 'Auth Guard', 'Search API'],
      image: 'noxe.png',
      link: 'https://noxe-movies-sand.vercel.app/#/home'
    }
  ];

}
