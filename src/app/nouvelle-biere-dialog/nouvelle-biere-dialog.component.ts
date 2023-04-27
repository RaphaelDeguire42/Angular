import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApibieroService } from '../serv/apibiero.service';

@Component({
  selector: 'app-nouvelle-biere-dialog',
  templateUrl: './nouvelle-biere-dialog.component.html',
  styleUrls: ['./nouvelle-biere-dialog.component.scss']
})
export class NouvelleBiereDialogComponent {
  formAjout: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<NouvelleBiereDialogComponent>, private apibiero: ApibieroService) { }

  ngOnInit(): void {
    this.formAjout = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(3)]],
      brasserie: ['', [Validators.required, Validators.minLength(3)]],
      description: ['',],
      image: ['', ]
    });
  }

  ajouterBiere() {
    if (this.formAjout.valid) {
      this.apibiero.ajouterBiere(this.formAjout.value).subscribe((data)=>{
        this.apibiero.getBiere(data.data).subscribe((biere)=>{
          this.dialogRef.close(biere);
        })
      });
    }
  }

  annuler(): void {
    this.dialogRef.close();
  }
}
