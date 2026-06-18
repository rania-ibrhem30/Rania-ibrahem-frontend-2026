import { Component } from '@angular/core';
import { FormsModule, } from '@angular/forms';
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
  isLoading = false;

  sendEmail(form: any) {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      alert('Please fill in all fields.');
      return;
    }

    this.isLoading = true;

    const submissionData = new FormData();
    submissionData.append('name', this.formData.name);
    submissionData.append('email', this.formData.email);
    submissionData.append('message', this.formData.message);

    fetch('https://formspree.io/f/mojzzzgg', {
      method: 'POST',
      body: submissionData,
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          this.isSubmitted = true;
          this.isLoading = false;
          form.resetForm();

          setTimeout(() => {
            this.isSubmitted = false;
          }, 5000);
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        alert('There was an error sending your message. Please try again later.');
        this.isLoading = false;
      });
  }
}

