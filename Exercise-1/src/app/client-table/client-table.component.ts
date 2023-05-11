import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.css']
})
export class ClientTableComponent implements OnInit {

  clients: Client[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.clientService.client$.subscribe(clients => {
      this.clients = clients;
    });
  }

}
