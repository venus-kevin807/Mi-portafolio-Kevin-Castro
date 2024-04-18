import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  constructor(private contactService: ContactService) { }

  profileForm = new FormGroup({
    Name: new FormControl(''),
    Number: new FormControl(''),
    email: new FormControl(''),
    Topic: new FormControl(''),
    Mensage: new FormControl(''),
  });

  onSubmit() {
    console.warn(this.profileForm.value);
}
}
