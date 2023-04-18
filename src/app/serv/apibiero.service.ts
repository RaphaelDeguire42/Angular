import { Injectable } from '@angular/core';
import { IProduit } from '../iproduit';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IListeProduit } from '../iliste-produit';

@Injectable({
  providedIn: 'root'
})
export class ApibieroService {
  private url :string = "http://127.0.0.1:8000/webservice/php/biere/";
  constructor(private http:HttpClient) { }

  getBieres():Observable<IListeProduit>{
    console.log("ici");
    return this.http.get<IListeProduit>(this.url);
  }

  getBiere(id:number){}

  //ajouterBiere(biere:IProduit):Observable<any>{ }

  //modifierBiere(biere:IProduit):Observable<any>{}
  
  //effacerBiere(id:number):Observable<any>{}
}
