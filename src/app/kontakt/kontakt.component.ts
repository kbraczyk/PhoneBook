import { Component, DoCheck } from '@angular/core';
import { ContactService } from '../contact.service';
import { Kontakt } from '../kontakt';
import { MatTableDataSource } from '@angular/material';
import { DialogService } from '../dialog.service';
import { RemoveComponent } from '../remove/remove.component';
import { AddComponent } from '../add/add.component';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss'],
})
export class KontaktComponent implements DoCheck {

  kontakty: Array<Kontakt>;
  dataSource;
  columnsToDisplay = ['id', 'alias', 'name', 'surName', 'email', 'phone', 'action'];

  constructor(private dialogService: DialogService, private service: ContactService) {
    this.service.getContactsObs().subscribe((contacts: Array<Kontakt>) => {
      this.kontakty = contacts;
    });
  }

  ngDoCheck(): void {
    this.dataSource = new MatTableDataSource(this.kontakty);
  }

  openDialogRemove(kontakt) {
    this.dialogService.openDialog(RemoveComponent, kontakt);
  }
  openDialogAdd() {
    this.dialogService.openDialog(AddComponent);
  }

}

