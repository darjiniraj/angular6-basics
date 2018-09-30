import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { AppComponent } from './app.component';
import { DateComponent } from './date/date.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { AddressInputStyle1Component } from './address-input-style1/address-input-style1.component';
import { AddressInputStyle2Component } from './address-input-style2/address-input-style2.component';
import { ViewModule } from './view/view.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    AddressCardComponent,
    AddressInputStyle1Component,
    AddressInputStyle2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ViewModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
