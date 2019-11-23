import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { InsuranceDataComponent } from './components/insurance-data/insurance-data.component';
import { AutomovileDataComponent } from './components/automovile-data/automovile-data.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    PersonalDataComponent,
    InsuranceDataComponent,
    AutomovileDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
