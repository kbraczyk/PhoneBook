import { Injectable } from '@angular/core';
import { Kontakt } from './kontakt';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable()
export class ContactService {

  private contacts: Kontakt[];
  // private detailContact: Kontakt;
  // private editContact: Kontakt;

  private contactsObs = new BehaviorSubject<Array<Kontakt>>([]);
  // private detailObs = new BehaviorSubject<Kontakt>(this.detailContact);
  // private editObs = new BehaviorSubject<Kontakt>(this.editContact);


  constructor() {
    this.contacts = [{ id: 1, alias: 'Cylo', name: 'Krzysztof', surName: 'Brączyk', email: 'braczykkrzysztof@gmail.com', phone: 787276491 },
    { id: 2, alias: 'Izka', name: 'Izabela', surName: 'Adamski', email: 'izi@gmail.com', phone: 799256348 },
    { id: 3, alias: 'Olek', name: 'Aleksander', surName: 'Piotrowski', email: 'oleq@gmail.com', phone: 787215356 },
    { id: 4, alias: 'Natalka', name: 'Natalia', surName: 'Dworska', email: 'dworka.natalia@gmail.com', phone: 514452160 },
    { id: 5, alias: 'Leoś', name: 'Leon', surName: 'Grabowski', email: 'leoncjusz@gmail.com', phone: 717041708 }
    ];
    this.contactsObs.next(this.contacts);
  }

  getContactsObs(): Observable<Array<Kontakt>> {
    return this.contactsObs.asObservable();
  }
  getCon(id: number): Observable<Kontakt> {
    return of(this.contacts.find(con => con.id === id));
  }

  add(kontakt: Kontakt) {
    if (kontakt.alias && kontakt.name && kontakt.surName && kontakt.email && kontakt.phone && !isNaN(kontakt.phone)) {
      kontakt.id = this.contacts.length + 1;
      this.contacts.push(kontakt);
      this.contactsObs.next(this.contacts);
    } else {
      console.log('error');
    }
  }
  // edit() {
  //   this.contactsObs.next(this.contacts.slice());
  // }
  remove(kontakt) {
    this.contacts.splice(this.contacts.indexOf(kontakt), 1);
    this.contactsObs.next(this.contacts);
  }
}
