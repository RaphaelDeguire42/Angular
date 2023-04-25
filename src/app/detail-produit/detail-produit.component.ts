import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApibieroService } from '../serv/apibiero.service';
import { AuthServService } from '../serv/auth-serv.service';
import { IProduit } from '../iproduit';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.scss']
})
export class DetailProduitComponent {

  biere:IProduit;
  formModif:FormGroup;

  constructor(private authServ:AuthServService, private route:ActivatedRoute, private apibiero:ApibieroService){
    authServ.setTitre("Détail")

  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.apibiero.getBiere(params['id']).subscribe((data) => {
        this.biere = data;
        this.formModif = new FormGroup({
          id_biere: new FormControl(this.biere.id_biere),
          nom: new FormControl(this.biere.nom, [Validators.required, Validators.minLength(3)]),
          brasserie: new FormControl(this.biere.brasserie, [Validators.required, Validators.minLength(3)]),
          description: new FormControl(this.biere.description, [Validators.required]),
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
      console.log(data);
    });
  }

  annuler(){
    console.log(this.formModif)
    this.formModif.setValue(this.biere);
  }

  supprimer(){

  }
}
