import { MaterialExModule } from './shared/material.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MasterLayoutComponent } from './core/layout/master-layout/master-layout.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    // SidenavModule
    MaterialExModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
