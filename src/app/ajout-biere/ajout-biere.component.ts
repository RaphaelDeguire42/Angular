import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApibieroService } from '../serv/apibiero.service';
import { IBiere } from '../ibiere';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-ajout-biere',
  templateUrl: './ajout-biere.component.html',
  styleUrls: ['./ajout-biere.component.scss']
})
export class AjoutBiereComponent {

  biere:IBiere;
  formModif:FormGroup;

  constructor(private route:ActivatedRoute, private apibiero:ApibieroService, private dialog: MatDialog, private router: Router, private snackBar: MatSnackBar){}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.apibiero.getBiere(params['id']).subscribe((data) => {
        this.biere = data;
        this.formModif = new FormGroup({
          id_biere: new FormControl(this.biere.id_biere),
          nom: new FormControl(this.biere.nom, [Validators.required, Validators.minLength(3)]),
          brasserie: new FormControl(this.biere.brasserie, [Validators.required, Validators.minLength(3)]),
          description: new FormControl(this.biere.description),
          image: new FormControl(this.biere.image),
        });
        const formValues = {
          id_biere: this.biere.id_biere,
          nom: this.biere.nom,
          brasserie: this.biere.brasserie,
          description: this.biere.description,
          image: this.biere.image,
        };
        this.formModif.setValue(formValues);
      });
    });
  }

  soumettre(){
    this.biere = this.formModif.value;
    this.apibiero.modifierBiere(this.biere).subscribe((data)=>{
      this.router.navigateByUrl('/');
      this.snackBar.open('Bière modifiée', 'Fermer', {
        duration: 5000,
      });
    });
  }

  annuler(){
    this.formModif.setValue(this.biere);
  }

  supprimer(id:number){
    this.apibiero.effacerBiere(id).subscribe(()=>{
      this.router.navigateByUrl('/');
      this.snackBar.open('Bière supprimée', 'Fermer', {
        duration: 5000,
      });
    });
  }

  openConfirmationDialog(id_biere: number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: 'Êtes-vous certain de vouloir supprimer cette bière?',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'confirm') {
        this.supprimer(id_biere);
      }
    });
  }
}
