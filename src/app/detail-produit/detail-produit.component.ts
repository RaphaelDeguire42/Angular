import { Component } from '@angular/core';
import { AuthServService } from '../serv/auth-serv.service';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.scss']
})
export class DetailProduitComponent {
  constructor(private authServ:AuthServService){
    authServ.setTitre("Détail")
  }
}
