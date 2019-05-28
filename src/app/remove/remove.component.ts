import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.scss']
})
export class RemoveComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data, private service: ContactService,
    private dialogRef: MatDialogRef<RemoveComponent>) { }

  yes() {
    this.service.remove(this.data.kontakt);
    this.closeDialog();
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
