import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { KontaktDetailsComponent } from './kontakt-details/kontakt-details.component';
import { AddComponent } from './add/add.component';
import { KontaktComponent } from './kontakt/kontakt.component';


const routes: Routes = [
  {
    path: '',
    component: KontaktComponent
  },
  {
    path: 'newcontact',
    component: AddComponent
  },
  {
    path: 'details/:id',
    component: KontaktDetailsComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  }

];

export const AppRoutes = RouterModule.forRoot(routes);
