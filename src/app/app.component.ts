import { Component } from '@angular/core';
import { contacts } from '../app/contacts-mocks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Testowanie komponentów i bindów';
  kontakty = contacts;
}



