import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { SharedService } from './../shared.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent implements OnInit {
  @ViewChild('userCell') userCell: TemplateRef<any>;
  @ViewChild('leagueNameWithAvatarCell') leagueNameWithAvatarCell: TemplateRef<any>;
  rows: FirebaseListObservable<any>;
  columns = [];
  sideColumns = [];

  constructor(private shared: SharedService, private db: AngularFireDatabase) { }

  ngOnInit() {

    this.columns = [{
      prop: 'name',
      width: 300,
    cellTemplate: this.leagueNameWithAvatarCell
    
  }, {
        prop: 'commissioner',
    width: 300,    
    cellTemplate: this.userCell
      }];
    

    this.sideColumns = [{
      prop: 'name',
    width: 200
    
  }];

    this.rows = this.db.list('/leagues');
  }

}
