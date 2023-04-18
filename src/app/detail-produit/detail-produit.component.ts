import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApibieroService } from '../serv/apibiero.service';
import { AuthServService } from '../serv/auth-serv.service';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.scss']
})
export class DetailProduitComponent {
  constructor(private authServ:AuthServService, private route:ActivatedRoute, private apibiero:ApibieroService){
    authServ.setTitre("Détail")

  }

  ngOnInit(){
    console.log(this.route.snapshot);
    console.log(this.route);
    this.route.params.subscribe((params)=>{
      this.apibiero.getBiere(params['id']);
    })
    
  }
}
