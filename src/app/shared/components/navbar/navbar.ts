import { Component, effect, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})

export class Navbar {
  private translate = inject(TranslateService);

  // إدارة حالة القائمة للموبايل وحالة الدارك مود باستخدام الـ Signals
  currentLang = signal<string>(localStorage.getItem('lang') || 'ar');
  isMenuOpen = signal<boolean>(false);
  isDarkMode = signal<boolean>(true);

  constructor() {
    // تفعيل اللغة والاتجاه المخزن أول ما الكومبوننت يفتح
    this.translate.use(this.currentLang());
    this.applyLanguageDirection(this.currentLang());
  }

  ngOnInit() {
    // 2. أول ما الصفحة تفتح نضمن إن كلاس الـ dark محطوط في الـ body علطول
    if (this.isDarkMode()) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  toggleDarkMode() {

    this.isDarkMode.update(value => !value);

    if (this.isDarkMode()) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  toggleLanguage() {
    this.currentLang.update(lang => lang === 'ar' ? 'en' : 'ar');
    this.translate.use(this.currentLang());
    localStorage.setItem('lang', this.currentLang());
    this.applyLanguageDirection(this.currentLang());
    this.isMenuOpen.set(false); // قفل قائمة الموبايل تلقائياً بعد تغيير اللغة
  }

  toggleMenu() {
    this.isMenuOpen.update(open => !open);
  }



  private applyLanguageDirection(lang: string) {
    const htmlTag = document.getElementsByTagName('html')[0];
    htmlTag.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    htmlTag.setAttribute('lang', lang);
  }
  navigateToSection(sectionId: string) {
    this.isMenuOpen.set(false); // قفل المنيو للموبايل

    const element = document.getElementById(sectionId);

    if (element) {
      // حساب مسافة السيكشن من أعلى الشاشة بالبكسل
      const offsetTop = element.getBoundingClientRect().top + window.scrollY;

      // إجبار نافذة المتصفح الرئيسية على النزول للرقم ده بنعومة
      window.scrollTo({
        top: offsetTop - 20, // الـ -20 دي عشان نسيب مسافة صغيرة فوق السيكشن شكلها أشيك
        behavior: 'smooth'
      });
    } else {
      console.error(`السيكشن ده مش موجود أو الـ ID مش مكتوب صح: ${sectionId}`);
    }
  }
}