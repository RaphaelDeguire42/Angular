import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { EnteteComponent } from './entete/entete.component';
import { ListeProduitComponent } from './liste-produit/liste-produit/liste-produit.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { NonTrouveComponent } from './non-trouve/non-trouve.component';
import { FormsModule } from '@angular/forms';
import { ProduitComponent } from './liste-produit/produit/produit.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    EnteteComponent,
    ListeProduitComponent,
    DetailProduitComponent,
    NonTrouveComponent,
    ProduitComponent
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
