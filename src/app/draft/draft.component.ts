import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { SharedService } from './../shared.service';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.scss']
})
export class DraftComponent implements OnInit {

  rows: FirebaseListObservable<any>;
  columns = [{
    name: 'Team',
    prop: 'name'
    
  }, {
    name: 'Player Count'  
  }];

  constructor(private shared: SharedService, private db: AngularFireDatabase) { }

  ngOnInit() {
    this.rows = this.db.list('/teams');
  }

}
