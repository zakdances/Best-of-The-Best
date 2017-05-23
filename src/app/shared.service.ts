import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class SharedService {

  users: FirebaseListObservable<any>;  
  user: Observable<firebase.User>;
  avatar: string;

  constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase,) {
    this.user = this.afAuth.authState;
    this.users = this.db.list('/users');
    

    this.user.subscribe((z: any) => {
      console.log(z);
      if (z) {
        this.avatar = z.photoURL;
        
        const me = this.db.list('/users', {
          query: {
            orderByChild: 'key',
            equalTo: z.uid,
            orderByKey: true,
          }
        }).first().subscribe((y) => {
          const existingUser = y.length > 0 ? y[0] : null;
          if (existingUser) {
            this.updateUser(z, z.uid);
          } else {
            this.addUser(z, z.uid);
          }
          // console.log('User found!');
          // console.log(y.length > 0 ? y[0] : null);
        });
        
        
      }
    });

    
  }

  // ngOnInit() {
    
  // }
  private newUserObject(user: any) {
    return {
      photoURL: this.avatar,
      displayName: user.displayName
    };
  }

  private addUser(user: any, id: string) {
    this.db.object(`/users/${id}`).set(this.newUserObject(user));
  }

  private updateUser(user: any, id: string) {
    const obj = this.db.object('/users');

    const newUserObj = {};
    newUserObj[id] = this.newUserObject(user);
    
    obj.update(newUserObj);
  }



  public loginWithFacebook() {
      const provider = new firebase.auth.FacebookAuthProvider();
      
      provider.setCustomParameters({
        'display': 'popup'
          });

      return firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      }).catch(function(error: any) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
      });    
  }

  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  userByID(id) {
    const w = this.users.map((users: any[]) => {
      if (users) {
        // console.log(users);
        const user = users.find((user, i, a) => {
          return user.$key === id;
        });
        // console.log('my user:');
        // console.log(user);
        return user;
      }
      // return '';
    });
    return w;
  }

}
