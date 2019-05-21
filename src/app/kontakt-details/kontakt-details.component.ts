import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Kontakt } from '../kontakt';


@Component({
  selector: 'app-kontakt-details',
  templateUrl: './kontakt-details.component.html',
  styleUrls: ['./kontakt-details.component.scss']
})
export class KontaktDetailsComponent implements OnInit {

  selectContact: Kontakt;

  constructor(private service: ContactService) {
    this.service.getDetailContact().subscribe(con => {
      this.selectContact = con;
    });
  }

  ngOnInit() {
  }


}
