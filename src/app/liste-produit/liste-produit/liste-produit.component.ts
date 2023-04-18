import { Component } from '@angular/core';
import { IListeProduit } from 'src/app/iliste-produit';
import { ApibieroService } from 'src/app/serv/apibiero.service';
import { AuthServService } from 'src/app/serv/auth-serv.service';
import { IProduit } from '../../iproduit';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.scss']
})
export class ListeProduitComponent {
  message:string;
  produits : IProduit[];
  prixMax:number = 10;
  estEditable:boolean = true;
  //produits2 : Array<object>;

  constructor(private authServ:AuthServService, private apibiero:ApibieroService){
    authServ.statut().subscribe((statutConnection:boolean)=>{
      if(this.estEditable && !statutConnection){
        this.estEditable = false;
      }
      console.log(statutConnection);
    })
    
    authServ.setTitre("Liste des produits")
  
  }

  ngOnInit()  {
    this.apibiero.getBieres().subscribe((produit:IListeProduit)=>{
      this.produits = produit.data;
    });
    /*this.produits = [{
      nom:"Test 1",
      prix : 45,
      fabricant : "Compagnie XYZ",
      description : "Lorem ipsum..."
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
      fabricant : "Compagnie XYZ",
      description : "Lorem ipsum..."
    },
  ]*/
    
  
    console.log(this.produits)
  }

  nouveauProduit(produit:IProduit){
    console.log(produit);
    this.produits.push(produit)
  }

  verifAuth(){
    if(this.estEditable){
      if(!this.authServ.verifConnection()){
        this.estEditable = false;
      }
    }
  }


}
