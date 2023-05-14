import { Component, EventEmitter, Output } from '@angular/core';
import { ContactData } from '../model/ContactData';
import { ContactFormServiceService } from '../service/contact-form-service.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  robotCheck: number = 0;

  constructor(private contactFormService: ContactFormServiceService) { };

  onSubmit() {

    if (this.name == '') {
      // error
    } else if (this.email == '') {
      // error
    } else if (this.message == '') {
      // error
    } else if (this.robotCheck != 10) {
      // error
    } else {
      const contactData = new ContactData(this.name, this.email, this.message);

      this.contactFormService.addContactData(contactData);

      this.name='';
      this.email='';
      this.message='';
      this.robotCheck=0;
    }

  }
}
