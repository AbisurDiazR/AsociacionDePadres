import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(
    private _fb: AngularFirestore,
    private _auth: AngularFireAuth
  ) { }

  public saveUserData(userData: any, usr: any, uid: any){
    let data = {
      email: userData.email,
      fullName: userData.fullName,
      grade: userData.grade,
      nickname: userData.nickname,
      password: userData.password,
      createdAt: usr.createdAt,
      creationTime: usr.creationTime,
      lastLoginAt: usr.lastLoginAt,
      lastSignInTime: usr.lastSignInTime
    };
    return this._fb.collection(`users`).doc(uid).set(data);
  }

  public createAccount(email: any, password: any){
    return this._auth.createUserWithEmailAndPassword(email, password);
  }

  public getCurrentUser(){
    return this._auth.authState;
  }

  public async login(email: any, password: any) {
    try {
      const login = await this._auth.signInWithEmailAndPassword(email, password);
      return login;
    } catch (e: any) {
      let errorType = e.message;
      return errorType;
    }
  }

  public getUserById(uid: any) {
    return this._fb.collection('usuarios').doc(uid).get();
  }
}
