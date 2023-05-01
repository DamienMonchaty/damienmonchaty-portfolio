import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Stage1Component } from './components/stages/stage1/stage1.component';
import { Stage2Component } from './components/stages/stage2/stage2.component';
import { Ppe1Component } from './components/ppes/ppe1/ppe1.component';
import { Ppe2Component } from './components/ppes/ppe2/ppe2.component';
import { VeilleComponent } from './components/veille/veille.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjetsComponent } from './components/projets/projets.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Stage1Component,
    Stage2Component,
    Ppe1Component,
    Ppe2Component,
    VeilleComponent,
    ContactComponent,
    ProjetsComponent,
    TableauComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
