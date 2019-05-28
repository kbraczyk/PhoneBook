import { Component, OnInit, Inject } from '@angular/core';
import { ContactService } from '../contact.service';
import { Kontakt } from '../kontakt';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  newContact: Kontakt = { id: null, alias: '', name: '', surName: '', email: '', phone: null };
  maxLength = 24;

  constructor(@Inject(ContactService) private service, private dialogRef: MatDialogRef<AddComponent>) {
  }

  ngOnInit() {
  }

  addContact() {
    if (this.newContact) {
      this.service.add(this.newContact);
      this.newContact = { id: null, alias: '', name: '', surName: '', email: '', phone: null };
      this.dialogRef.close();
    }
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
