import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  imports: [TranslateModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skillCategories = [
    {
      id: 'frontend',
      icon: '💻',
      items: ['Angular', 'TypeScript', 'JavaScript (ES6+)', 'RxJS', 'Angular Signals']
    },
    {
      id: 'styling',
      icon: '🎨',
      items: ['Tailwind CSS', 'CSS3 / HTML5', 'Bootstrap', 'Material Design', 'PrimeNG']
    },
    {
      id: 'tools',
      icon: '🛠️',
      items: ['Git & GitHub', 'SSR (Server-Side Rendering)', 'REST APIs Integration', 'JWT Auth', 'JSON / i18n']
    }
  ];
}
