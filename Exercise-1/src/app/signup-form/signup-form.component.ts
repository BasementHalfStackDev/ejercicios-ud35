import { Component } from '@angular/core';
import { Client } from '../models/client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})

export class SignupFormComponent {
  public name: string = '';
  public cif: string = '';
  public address: string = '';
  public group: number = 0;

  constructor(private clientService: ClientService) { }

  onSubmit() {
    if (this.name == '') {
      window.alert("Name cannot be empty!");
    } else if (this.cif == '') {
      window.alert("CIF cannot be empty!");
    } else if (this.address == '') {
      window.alert("Address cannot be empty!");
    } else if (this.group <= 0) {
      window.alert("Group cannot be 0 or negative!");
    } else {
      const newClient = new Client(this.name, this.cif, this.address, this.group);
      this.clientService.addClient(newClient);
      this.name = '';
      this.cif = '';
      this.address = '';
      this.group = 0;
    }
  }

}
