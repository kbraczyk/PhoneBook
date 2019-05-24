import { Component, OnInit } from '@angular/core';
import { Kontakt } from '../kontakt';
import { ContactService } from '../contact.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  kontakt: Kontakt;

  constructor(private route: ActivatedRoute, private service: ContactService, private location: Location) {
  }

  ngOnInit() {
    this.getContact();
  }

  getContact() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getCon(id).subscribe(selectContakt => this.kontakt = selectContakt);
  }
}
