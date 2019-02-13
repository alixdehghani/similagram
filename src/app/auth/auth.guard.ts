import { CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
// import { auth } from 'firebase/app';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private afAuth: AngularFireAuth) {}
    canActivate(){
        if(this.afAuth.auth.currentUser){
            return true;
        } else {
            return false;
        }
    }
}