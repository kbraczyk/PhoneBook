import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatInputModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { KontaktDetailsComponent } from './kontakt-details/kontakt-details.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { ContactService } from './contact.service';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutes } from './app.routes';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    KontaktDetailsComponent,
    KontaktComponent,
    AddComponent,
    EditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatInputModule,
    AppRoutes,
    MatTableModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent],
  entryComponents: [AddComponent]
})
export class AppModule { }
