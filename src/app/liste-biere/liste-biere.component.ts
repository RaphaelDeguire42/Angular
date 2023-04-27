import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IListeBiere } from 'src/app/iliste-biere';
import { ApibieroService } from 'src/app/serv/apibiero.service';
import { IBiere } from '../ibiere';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NouvelleBiereDialogComponent } from 'src/app/nouvelle-biere-dialog/nouvelle-biere-dialog.component';


@Component({
  selector: 'app-liste-biere',
  templateUrl: './liste-biere.component.html',
  styleUrls: ['./liste-biere.component.scss']
})
export class ListeBiereComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;


  produits: MatTableDataSource<IBiere>;

  //produits2 : Array<object>;
  colonne = ['image', 'nom', 'brasserie', 'date_ajout', 'date_modif', 'action'];

  constructor(private apibiero:ApibieroService, private dialog: MatDialog, private snackBar: MatSnackBar){}

  ngOnInit()  {
    this.apibiero.getBieres().subscribe((produit:IListeBiere)=>{
      this.produits = new MatTableDataSource(produit.data);
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.produits.sort = this.sort;
    }, 500);
  }

  nouveauProduit(produit:IBiere){
    const nouvelleListe = [...this.produits.data, produit];
    this.produits.data = nouvelleListe;
    this.snackBar.open('Bière ajoutée', 'Fermer', {
      duration: 5000,
    });
  }

  supprimerProduit(id:number){
    this.apibiero.effacerBiere(id).subscribe(()=>{
      this.produits.data = this.produits.data.filter(produit => produit.id_biere !== id);
      this.snackBar.open('Bière supprimée', 'Fermer', {
        duration: 5000,
      });
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

  openNouvelleBiereDialog(){
    const dialogRef = this.dialog.open(NouvelleBiereDialogComponent, {
      width: '450px',
      height: '600px'
    });

    dialogRef.afterClosed().subscribe((biere:IBiere) => {
      if(biere) this.nouveauProduit(biere);
    });
  }
}
