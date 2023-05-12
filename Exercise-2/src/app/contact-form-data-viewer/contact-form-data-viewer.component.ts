import { Component, Input, OnInit } from '@angular/core';
import { ContactData } from 'model/ContactData';
import { ContactDataService } from 'service/contact-data.service';

@Component({
  selector: 'app-contact-form-data-viewer',
  templateUrl: './contact-form-data-viewer.component.html',
  styleUrls: ['./contact-form-data-viewer.component.css']
})
export class ContactFormDataViewerComponent implements OnInit {

  contactData: ContactData = new ContactData('','','');
  constructor(private contactDataService: ContactDataService) { }

  ngOnInit() {
    this.contactDataService.contactData$.subscribe(contactData => {
      this.contactData = contactData;
    });
  }

}
