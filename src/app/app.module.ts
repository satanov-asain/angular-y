import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { EmailCardComponent } from './components/email-card/email-card.component';
import { UserIncomeComponent } from './components/user-income/user-income.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { CityChoiseBoardComponent } from './components/city-choise/city-choise-board/city-choise-board.component';
import { CityChoiseSimpleComponent } from './components/city-choise/city-choise-simple/city-choise-simple.component';
import { CityChoiseHardComponent } from './components/city-choise/city-choise-hard/city-choise-hard.component';
import { CityChoiseResultComponent } from './components/city-choise/city-choise-result/city-choise-result.component';
import { CityChoiseListSimpleComponent } from './components/city-choise/city-choise-list-simple/city-choise-list-simple.component';
import { CityChoiseListHardComponent } from './components/city-choise/city-choise-list-hard/city-choise-list-hard.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    EmailCardComponent,
    UserIncomeComponent,
    UserListComponent,
    CityChoiseBoardComponent,
    CityChoiseSimpleComponent,
    CityChoiseHardComponent,
    CityChoiseResultComponent,
    CityChoiseListSimpleComponent,
    CityChoiseListHardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
