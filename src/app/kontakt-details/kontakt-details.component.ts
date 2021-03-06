import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';
import { Kontakt } from '../kontakt';


@Component({
  selector: 'app-kontakt-details',
  templateUrl: './kontakt-details.component.html',
  styleUrls: ['./kontakt-details.component.scss']
})
export class KontaktDetailsComponent implements OnInit {

  kontakt: Kontakt;

  constructor(private route: ActivatedRoute, private service: ContactService) {
  }

  ngOnInit() {
    this.getContact();
  }
  getContact() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getContact(id).subscribe(con => this.kontakt = con);
  }
}
