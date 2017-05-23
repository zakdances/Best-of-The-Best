import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';
import { RouterModule, Router } from '@angular/router';
import { SharedService } from './../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // user: Observable<firebase.User>;

  constructor(private shared: SharedService, private router: Router) {
    
  }

  ngOnInit() {
    // this.user = this.afAuth.authState;
  }

  loginWithFacebook() {
    this.shared.loginWithFacebook(); 
  }

  loginWithGoogle() {
    // this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.shared.loginWithGoogle().then(() => {
      this.router.navigateByUrl('/');
    });
  }

  logout() {
    this.shared.logout();
  }

}
