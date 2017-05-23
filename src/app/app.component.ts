import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  avatar: string;
  constructor(private db: AngularFireDatabase, private shared: SharedService) {

    
}

  ngOnInit() {
    this.shared.user.subscribe((z: any) => {
      console.log(z);
      this.avatar = z.photoURL;
    });
  }  
}
