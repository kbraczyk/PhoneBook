import { Injectable } from '@angular/core';
import { Kontakt } from './kontakt';
import { BehaviorSubject, Observable } from 'rxjs';
import { SelectorContext } from '@angular/compiler';

@Injectable()
export class ContactService {

  private contacts: Kontakt[];
  private detailContact: Kontakt;
  private editContact: Kontakt;

  private contactsObs = new BehaviorSubject<Array<Kontakt>>([]);
  private detailObs = new BehaviorSubject<Kontakt>(this.detailContact);
  private editObs = new BehaviorSubject<Kontakt>(this.editContact);


  constructor() {
    this.contacts = [{ alias: 'Cylo', name: 'Krzysztof', surName: 'Brączyk', email: 'braczykkrzysztof@gmail.com', phone: 787276491 },
    { alias: 'Izka', name: 'Izabela', surName: 'Adamski', email: 'izi@gmail.com', phone: 799256348 },
    { alias: 'Olek', name: 'Aleksander', surName: 'Piotrowski', email: 'oleq@gmail.com', phone: 787215356 },
    { alias: 'Natalka', name: 'Natalia', surName: 'Dworska', email: 'dworka.natalia@gmail.com', phone: 514452160 },
    { alias: 'Leoś', name: 'Leon', surName: 'Grabowski', email: 'leoncjusz@gmail.com', phone: 717041708 }
    ];
    this.contactsObs.next(this.contacts);
  }

  getContactsObs(): Observable<Array<Kontakt>> {
    return this.contactsObs.asObservable();
  }
  getDetailContact(): Observable<Kontakt> {
    return this.detailObs.asObservable();
  }
  getEditContact(): Observable<Kontakt> {
    return this.editObs.asObservable();
  }

  add(kontakt: Kontakt) {
    if (kontakt.alias && kontakt.name && kontakt.surName && kontakt.email && kontakt.phone) {
      this.contacts.push(kontakt);
      this.contactsObs.next(this.contacts);
    } else {
      console.log('error');
    }
  }
  edit(kontakt: Kontakt) {
    this.editContact = kontakt;
    this.editObs.next(this.editContact);
  }
  remove(kontakt) {
    this.contacts.splice(this.contacts.indexOf(kontakt), 1);
    this.contactsObs.next(this.contacts);
  }

  detail(kontakt: Kontakt) {
    this.detailContact = kontakt;
    this.detailObs.next(this.detailContact);
  }
}
