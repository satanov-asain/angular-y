import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { EmailCardComponent } from './components/email-card/email-card.component';
import { UserIncomeComponent } from './components/user-income/user-income.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AddressCardComponent } from './components/address-card/address-card.component';


@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    EmailCardComponent,
    UserIncomeComponent,
    UserListComponent,
    AddressCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
