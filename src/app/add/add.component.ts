import { Component, OnInit, Inject } from '@angular/core';
import { ContactService } from '../contact.service';
import { Kontakt } from '../kontakt';
import { MatDialogRef } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {


  email = new FormControl('', [Validators.required, Validators.email]);

  newContact: Kontakt = { id: null, alias: '', name: '', surName: '', email: '', phone: null };
  maxLength = 24;

  constructor(@Inject(ContactService) private service, private dialogRef: MatDialogRef<AddComponent>) {
  }

  ngOnInit() {
  }

  addContact() {
    this.newContact.email = this.email.value;

    if (this.newContact) {
      this.service.add(this.newContact);
      this.newContact = { id: null, alias: '', name: '', surName: '', email: '', phone: null };
      this.dialogRef.close();
    }
  }
  closeDialog() {
    this.dialogRef.close();
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  isDissable(): boolean {
    if (this.newContact.alias && this.newContact.name && this.newContact.surName && this.newContact.phone && this.email.valid) {
      return false;
    } else {
      return true;
    }
  }
}
