import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatProgressBarModule
} from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimelineComponent } from './components/timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatIconModule,
    FlexLayoutModule,
    MatListModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
