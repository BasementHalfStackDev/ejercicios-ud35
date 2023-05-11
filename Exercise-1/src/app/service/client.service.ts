import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private clients: Client[] = [];
  private clientSubject = new BehaviorSubject<Client[]>(this.clients);
  public client$ = this.clientSubject.asObservable();

  addClient(client: Client) {
    this.clients.push(client);
    this.clientSubject.next(this.clients);
  }
}
