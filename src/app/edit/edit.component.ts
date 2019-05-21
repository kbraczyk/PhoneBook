import { Component, OnInit } from '@angular/core';
import { Kontakt } from '../kontakt';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  editKontakt: Kontakt;

  constructor(private service: ContactService) {
    this.service.getEditContact().subscribe(con => {
      this.editKontakt = con;
    });
  }

  ngOnInit() {
  }

}
