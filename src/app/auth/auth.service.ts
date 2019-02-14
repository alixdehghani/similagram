import { AuthData } from './auth-data.model';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userAuthState = new Subject<boolean>();
  constructor(private afAuth: AngularFireAuth, private afDataset: AngularFirestore) { }

  registerUser(authData: AuthData) {
    this.afAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password).then(user => {
      user.user.sendEmailVerification();
      return this.afDataset.collection('users').doc(user.user.uid).set({
        email: authData.email,
        uid: user.user.uid,
        registrationDate: new Date().toString(),
        name: authData.fullName
      }).then(() => {
        this.afAuth.auth.signOut();
      })
    }).catch(err => {
    })
  }

  loginUser(authData: AuthData) {

    this.afAuth.auth.signInWithEmailAndPassword(authData.email, authData.password).then(massage => {
      if (!this.userAuthState) {
        this.afAuth.auth.signOut();
        this.userAuthState.next(false);
      } else {
        this.userAuthState.next(true);
      }

    }).catch(error => {
    });
  }
  checkUserAuthState() {
    this.afAuth.authState.subscribe(user => {
      if (user && user.emailVerified) {
        this.userAuthState.next(true);
      } else {
        this.userAuthState.next(false);
      }
    })
  }
  signoutUser() {
    this.afAuth.auth.signOut();
    this.userAuthState.next(false);
  }
}