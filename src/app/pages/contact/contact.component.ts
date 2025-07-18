import { Component } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    subject: '',
    otherSubject: '',
    message: ''
  };
  captchaAnswer = '';
  successMessage = '';

  onSubmit() {
    const subjectToSend =
      this.formData.subject === 'Other'
        ? this.formData.otherSubject
        : this.formData.subject;


    const templateParams = {
      subject: subjectToSend,
      message: this.formData.message
    };

    emailjs
      .send(
        'your_service_id',
        'your_template_id',
        templateParams,
        'your_public_key'
      )
      .then(
        () => {
          this.successMessage = 'Email sent successfully!';
          this.formData = { subject: '', otherSubject: '', message: '' };
          this.captchaAnswer = '';
        },
        (error) => {
          console.error('EmailJS error:', error);
          alert('Failed to send email.');
        }
      );
  }
}
