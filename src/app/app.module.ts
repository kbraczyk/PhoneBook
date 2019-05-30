import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatInputModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatFormField } from '@angular/material/form-field';

// Routing
import { AppRoutingModule } from './app-routing.module';
import { AppRoutes } from './app.routes';


// Components
import { AppComponent } from './app.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { KontaktDetailsComponent } from './kontakt-details/kontakt-details.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { RemoveComponent } from './remove/remove.component';

// Services
import { ContactService } from './contact.service';
import { DialogService } from './dialog.service';


@NgModule({
  declarations: [
    AppComponent,
    KontaktDetailsComponent,
    KontaktComponent,
    AddComponent,
    EditComponent,
    RemoveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatInputModule,
    AppRoutes,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [ContactService, DialogService],
  bootstrap: [AppComponent],
  entryComponents: [RemoveComponent, AddComponent]
})
export class AppModule { }
