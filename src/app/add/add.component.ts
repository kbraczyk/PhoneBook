import { Component, OnInit, Inject, TemplateRef } from '@angular/core';
import { ContactService } from '../contact.service';
import { Kontakt } from '../kontakt';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  newContact: Kontakt = { id: null, alias: '', name: '', surName: '', email: '', phone: null };
  maxLength = 24;


  constructor(@Inject(ContactService) private service) {
  }

  ngOnInit() {
  }

  addContact() {
    if (this.newContact) {
      this.service.add(this.newContact);
      this.newContact = { id: null, alias: '', name: '', surName: '', email: '', phone: null };
    }
  }
}
