import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './modules/material.module';
import { ListingComponent } from './listing/listing.component';
import { DogService } from './services/dog.service';
import { HttpClientModule } from '@angular/common/http';
import { PlaneService } from './services/plane.service';
import { IndividualComponent } from './individual/individual.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    IndividualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    HttpClientModule
  ],
  providers: [
    DogService,
    PlaneService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
