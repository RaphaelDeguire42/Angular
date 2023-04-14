import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { ListeProduitComponent } from './liste-produit/liste-produit/liste-produit.component';
import { NonTrouveComponent } from './non-trouve/non-trouve.component';

const routes: Routes = [
  { path:"", component:AccueilComponent},
  { path:"produit", component:ListeProduitComponent},
  { path:"produit/:id", component:DetailProduitComponent},
  { path:"accueil", redirectTo:""},
  { path:"**", component:NonTrouveComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
