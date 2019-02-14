import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  checkStateSub: Subscription;
  constructor(private authService: AuthService) { }
  loginState: boolean;
  ngOnInit() {
    this.authService.userAuthState.subscribe((res) => {
      this.loginState = res;
    })
  }
  onsignout() {
    this.authService.signoutUser();
  }

}
