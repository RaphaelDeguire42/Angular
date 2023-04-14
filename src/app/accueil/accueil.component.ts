import { Component } from '@angular/core';
import { AuthServService } from '../serv/auth-serv.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
  constructor(private authServ:AuthServService){
    authServ.setTitre("Accueil")
  }
}
