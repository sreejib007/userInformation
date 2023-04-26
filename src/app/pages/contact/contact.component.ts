import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string ='';
  email: string ='';
  message: string = '';

  get nameInvalid() {
    return !this.name;
  }

  get emailInvalid() {
    return !this.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
  }

  get messageInvalid() {
    return !this.message;
  }

  submitForm() {
    if (!this.nameInvalid && !this.emailInvalid && !this.messageInvalid) {
      console.log(this.name, this.email, this.message)
    }
  }
}
