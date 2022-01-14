import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ComitesService {

  
  constructor(
    private _db: AngularFirestore
  ) { }

  public createComite(data: any){
    return this._db.collection('Comites').add(data);
  }

  public getComites(){
    return this._db.collection('Comites').ref.get();
  }
}
