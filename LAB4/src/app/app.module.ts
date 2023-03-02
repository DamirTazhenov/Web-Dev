import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ProductComponent} from "./components/product/product.component";
import {HeadComponent} from "./components/head/head.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,HeadComponent]
})
export class AppModule { }
