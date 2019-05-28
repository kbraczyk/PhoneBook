import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Kontakt } from './kontakt';

@Injectable()
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openDialog(komponent, kontakt?: Kontakt) {
    this.dialog.open(komponent, {
      width: '320px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      data: {
        kontakt: kontakt
      }
    });
  }
}
