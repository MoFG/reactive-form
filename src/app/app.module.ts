import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CustomerFormComponent } from './customer-page/customer-form/customer-form.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '../../node_modules/@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { EventEmitService } from './event-emit.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerFormComponent,
    CustomerPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EventEmitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
