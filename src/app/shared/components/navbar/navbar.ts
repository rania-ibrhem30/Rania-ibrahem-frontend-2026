import { Component, effect, inject, signal } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})

export class Navbar {
  private translate = inject(TranslateService);

  isDarkMode = signal(localStorage.getItem('theme') === 'dark');
  currentLang = signal(localStorage.getItem('lang') || 'en');

  constructor() {


    this.translate.addLangs(['en', 'ar']); // تعريف اللغات المتاحة
    this.translate.setDefaultLang('en');   // لغة احتياطية لو الترجمة فشلت
    this.translate.use('en');              // اللغة الحالية


    effect(() => {
      const isDark = this.isDarkMode();
      if (isDark) {
        document.documentElement.classList.add('dark');
        document.body.style.backgroundColor = '#070114';
      } else {
        document.documentElement.classList.remove('dark');
        document.body.style.backgroundColor = '#f8fafc';
      }
    });

    effect(() => {
      const lang = this.currentLang();
      this.translate.use(lang);
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      localStorage.setItem('lang', lang);
    });
  }

  toggleDarkMode() {
    this.isDarkMode.update(prev => !prev);
  }

  toggleLanguage() {
    this.currentLang.update(prev => (prev === 'en' ? 'ar' : 'en'));
  }

}

