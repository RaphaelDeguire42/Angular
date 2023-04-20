import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthServService } from '../serv/auth-serv.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
  constructor(private authServ:AuthServService, private snack:MatSnackBar){
    authServ.setTitre("Accueil")
  }

  sesameOuvreToi(){
    console.log("allo")
    this.snack.open("Le message", "Message bouton",{
      duration: 3000
    })
  }
}
