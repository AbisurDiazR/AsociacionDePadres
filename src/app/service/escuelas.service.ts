import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class EscuelasService {

  constructor(
    private _db: AngularFirestore
  ) { }

  public createEscuela(data: any){
    return this._db.collection('Escuelas').add(data);
  }

  public getEscuelas(){
    return this._db.collection('Escuelas').ref.get();
  }
}
