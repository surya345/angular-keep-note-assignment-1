import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatExpansionModule} from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { AppComponent } from './app.component';
import { NotesService } from './notes.service';
import { HeaderComponent } from './header/header.component';
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [ AppComponent, HeaderComponent],
  imports: [
    HttpClientModule,
    FormsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule
   ],
  providers: [NotesService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
