import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ContactData } from 'src/app/model/ContactData';

@Injectable({
  providedIn: 'root'
})
export class ContactFormServiceService {

  // Define a private array to store clients
  private contactData: ContactData = new ContactData('','','');

  // Create a private BehaviorSubject to publish updates to the client array
  private contactDataSubject = new BehaviorSubject<ContactData>(this.contactData);

  // Create a public observable to allow components to subscribe to updates to the client array
  public contactData$ = this.contactDataSubject.asObservable();

  // Add a new client to the array and publish the updated array to subscribers
  addContactData(contactData: ContactData) {
  this.contactData = contactData;
  this.contactDataSubject.next(this.contactData);
  }

  constructor() { }
}
