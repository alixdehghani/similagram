import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth, private afDataset: AngularFirestore) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    const fullName = form.value.fullname;
    console.log(email, password);
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(user => {
      user.user.sendEmailVerification();
      return this.afDataset.collection('users').doc(user.user.uid).set({
        email: email,
        uid: user.user.uid,
        registrationDate: new Date().toString(),
        name: fullName
      }).then(() => {
        this.afAuth.auth.signOut();
      })
      console.log(user);
    }).catch(err => {
      console.log(err);
    })
  }
}
