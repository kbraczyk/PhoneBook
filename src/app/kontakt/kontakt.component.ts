import { Component, OnInit, Inject } from '@angular/core';
import { ContactService } from '../contact.service';
import { Kontakt } from '../kontakt';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss'],
})
export class KontaktComponent implements OnInit {

  kontakty: Array<Kontakt>;

  constructor(private service: ContactService) {
    this.service.getContactsObs().subscribe((contact: Array<Kontakt>) => {
      this.kontakty = contact;
    });
  }

  ngOnInit() {
  }

  onSelect(kontakt: Kontakt) {
    this.service.detail(kontakt);
  }

  remove(kontakt) {
    this.service.remove(kontakt);
  }
  edit(kontakt) {
    this.service.edit(kontakt);
  }
}
