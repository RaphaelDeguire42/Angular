import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduit } from 'src/app/iproduit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent {
  @Input() peutEditer:boolean;
  @Input() unProduit:IProduit;
  @Input() prixMax:number;
  @Output() peutEditerChange:EventEmitter<boolean> = new EventEmitter();
  @Output() eventAjout:EventEmitter<IProduit> = new EventEmitter();

  verifPasCher(prix:number):boolean{
    return (prix < this.prixMax );
  }
  changeEditable(evt:Event){
    this.peutEditerChange.emit(this.peutEditer);
    //console.log(evt?.target.value)
  }
  ajouterProduit(){
    this.eventAjout.emit({nom: "toto", fabricant : "Le magicien", prix : 45.50});
  }
}
