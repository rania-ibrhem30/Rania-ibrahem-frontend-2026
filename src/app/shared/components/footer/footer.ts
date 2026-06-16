import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [TranslateModule, FormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitted = false;

  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      console.log('Sending message:', this.formData);
      this.isSubmitted = true;


      setTimeout(() => {
        this.formData = { name: '', email: '', message: '' };
        this.isSubmitted = false;
      }, 4000);
    }
  }
}
