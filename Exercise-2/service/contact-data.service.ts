import { Injectable } from '@angular/core';
import { ContactData } from 'model/ContactData';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactDataService {
  contactData: ContactData = new ContactData('','','');
  contactDataSubject = new BehaviorSubject<ContactData>(this.contactData);

  public contactData$ = this.contactDataSubject.asObservable();

  constructor() { }
}
