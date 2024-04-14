import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllProductsComponent // Make sure to include AllProductsComponent in declarations if it's not already included
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Include HttpClientModule
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
