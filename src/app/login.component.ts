import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
 message: string;

  constructor((public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

}
