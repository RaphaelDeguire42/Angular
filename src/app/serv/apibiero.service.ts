import { Injectable } from '@angular/core';
import { IBiere } from '../ibiere';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IListeBiere } from '../iliste-biere';
import { INouvelleBiere } from '../inouvelle-biere';

@Injectable({
  providedIn: 'root'
})
export class ApibieroService {
  private url :string = "http://127.0.0.1:8000/webservice/php/biere/";
  constructor(private http:HttpClient) { }

  getBieres():Observable<IListeBiere>{
    return this.http.get<IListeBiere>(this.url);
  }

  getBiere(id: number | string): Observable<IBiere> {
    return this.http.get<{data: IBiere}>(`${this.url}/${id}`).pipe(
      map(response => {
        const { note_moyenne, note_nombre, ...data } = response.data;
        return data;
      })
    );
  }

  ajouterBiere(biere:INouvelleBiere):Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization' : 'Basic ' +btoa('biero:biero')
      })
    };
    return this.http.put<any>(this.url, biere, httpOption);
  };

  modifierBiere(biere:IBiere):Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization' : 'Basic ' +btoa('biero:biero')
      })
    };

    //delete biere.date_ajout; // Pour retirer des propriétés

    return this.http.post<any>(this.url+biere.id_biere, biere, httpOption);

  }

  effacerBiere(id:number):Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization' : 'Basic ' +btoa('biero:biero')
      })
    }
    return this.http.delete<any>(this.url+id, httpOption);
  }
}
