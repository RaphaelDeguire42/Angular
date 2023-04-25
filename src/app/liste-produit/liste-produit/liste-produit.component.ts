import { AfterViewInit, Component, OnInit, ViewChild, ViewChildren, QueryList  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IListeProduit } from 'src/app/iliste-produit';
import { ApibieroService } from 'src/app/serv/apibiero.service';
import { AuthServService } from 'src/app/serv/auth-serv.service';
import { IProduit } from '../../iproduit';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.scss']
})
export class ListeProduitComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;


  produits: MatTableDataSource<IProduit>;

  //produits2 : Array<object>;
  colonne = ['image', 'nom', 'brasserie', 'date_ajout', 'date_modif', 'action'];

  constructor(private authServ:AuthServService, private apibiero:ApibieroService, private dialog: MatDialog){
    authServ.statut().subscribe((statutConnection:boolean)=>{
    })

    authServ.setTitre("Liste des produits")

  }

  ngOnInit()  {
    this.apibiero.getBieres().subscribe((produit:IListeProduit)=>{
      this.produits = new MatTableDataSource(produit.data);
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.produits.sort = this.sort;
    });
  }

  nouveauProduit(produit:IProduit){
    console.log(produit);
    this.produits.data.push(produit)
  }

  supprimerProduit(id:number){
    this.apibiero.effacerBiere(id).subscribe(()=>{
      this.produits.data = this.produits.data.filter(produit => produit.id_biere !== id);
    });
  }

  openConfirmationDialog(produitId: number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: 'Êtes-vous certain de vouloir supprimer cette bière?',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'confirm') {
        this.supprimerProduit(produitId);
      }
    });
  }



}
