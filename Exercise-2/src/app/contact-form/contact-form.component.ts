import { Component } from '@angular/core';
import { ContactData } from 'model/ContactData';
import { ContactDataService } from 'service/contact-data.service';

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


  constructor(private contactDataService: ContactDataService) { }

  onSubmit(): void {

    if (this.name == '') {
      // error
    } else if (this.email == '') {
      // error
    } else if (this.message == '') {
      // error
    } else if (this.robotCheck != 10) {
      // error
    } else {
      let contactInfo = new ContactData(this.name, this.email, this.message);
      this.contactDataService.contactData = contactInfo;
    }

  }
}
