import { Component, ViewChild, OnInit, Inject, } from '@angular/core';
import { ContactService } from '../contact.service';
import { Kontakt } from '../kontakt';
import { MatTable, MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { AddComponent } from '../add/add.component';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss'],
})
export class KontaktComponent implements OnInit {

  kontakty: Array<Kontakt>;

  columnsToDisplay = ['id', 'alias', 'name', 'surName', 'email', 'phone', 'action'];
  dataSource;


  @ViewChild('table') table: MatTable<Element>;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: ContactService) {
    this.service.getContactsObs().subscribe((contact: Array<Kontakt>) => {
      this.kontakty = contact;
    });
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.kontakty);
    this.dataSource.sort = this.sort;
  }

  remove(kontakt) {
    const data = this.dataSource.data;
    this.service.remove(kontakt);
    this.dataSource.data = data;
  }
}
