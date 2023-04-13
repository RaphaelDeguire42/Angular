import { Component } from '@angular/core';
import { IProduit } from '../iproduit';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.scss']
})
export class ListeProduitComponent {
  message:string;
  produits : IProduit[];
  prixMax:number = 10;
  //produits2 : Array<object>;

  ngOnInit()  {
    this.produits = [{
      nom:"Test 1",
      prix : 45,
      fabricant : "Compagnie XYZ"
    },
    {
      nom:"Test 2",
      prix : 4.457,
      fabricant : "Compagnie XYZ",
      description : "Lorem ipsum..."
    },
    {
      nom:"Test 3",
      prix : 5,
      fabricant : "Compagnie XYZ"
    },
  ]
  
    console.log(this.produits)
  }

  verifPasCher(prix:number):boolean{
    return (prix < this.prixMax );
  }


}
