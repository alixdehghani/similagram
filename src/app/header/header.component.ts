import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth) { }
  loginState: boolean;
  ngOnInit() {
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user && user.emailVerified) {
        this.loginState = true;
      } else {
        this.loginState = false;
      }
    })

  }

}
