import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {Lab3Component} from './lab3/lab3.component';
import {InfoComponent} from './info/info.component';
import {ResultsComponent} from './results/results.component';
import {FormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import {DataTablesModule} from 'angular-datatables';
import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Lab3Component,
    InfoComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    DataTablesModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
