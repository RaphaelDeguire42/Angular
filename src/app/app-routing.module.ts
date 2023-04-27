import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutBiereComponent } from './ajout-biere/ajout-biere.component';
import { ListeBiereComponent } from './liste-biere/liste-biere.component';
import { NonTrouveComponent } from './non-trouve/non-trouve.component';

const routes: Routes = [
  { path:"", component:ListeBiereComponent},
  { path:"produit/:id", component:AjoutBiereComponent},
  { path:"accueil", redirectTo:""},
  { path:"**", component:NonTrouveComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
