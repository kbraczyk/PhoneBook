import { Component, OnInit, Inject } from '@angular/core';
import { ContactService } from '../contact.service';
import { Kontakt } from '../kontakt';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  newContact: Kontakt = { alias: '', name: '', surName: '', email: '', phone: null };
  maxLength = 24;


  constructor(@Inject(ContactService) private service) {

  }

  ngOnInit() {
  }

  addContact() {
    this.service.add(this.newContact);
    this.newContact = { alias: '', name: '', surName: '', email: '', phone: null };
  }

}
