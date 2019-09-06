import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {}
  jwt = new JwtHelperService;

  constructor(private _auth: AuthService,private route:Router) { }

  ngOnInit() {
  }

  loginUser() {
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res =>{
          console.log(res),
          localStorage.setItem('token', res.token)
            const Decode=this.jwt.decodeToken(res.token);
          localStorage.setItem('username', Decode.username);
          localStorage.setItem('roles', Decode.roles[0]);

          console.log(localStorage);
                    this.route.navigate(['/menu'])
        },

        err => console.log(err)
      );
  }

}
