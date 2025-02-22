import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserEmailComponent } from './components/email-card/user-email.component';
import { UserIncomeComponent } from './components/user-income/user-income.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AddressComponent } from './components/address-card/address.component';
import { CardLabelComponent } from './components/card-label/card-label.component';


@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    UserEmailComponent,
    UserIncomeComponent,
    UserListComponent,
    AddressComponent,
    CardLabelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
