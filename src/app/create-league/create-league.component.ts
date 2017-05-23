import { Component, OnInit } from '@angular/core';

import { League, newLeague } from './../models/league';
import { Player } from './../models/player';
import { Team } from './../models/team';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { SharedService } from './../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-league',
  templateUrl: './create-league.component.html',
  styleUrls: ['./create-league.component.scss']
})
export class CreateLeagueComponent implements OnInit {

  private league: League;
  private leagues: FirebaseListObservable<any[]>;
  private symbols = [
    
  ];

  private teams: FirebaseListObservable<any[]>;
  

  constructor(private db: AngularFireDatabase, private shared: SharedService, private router: Router) {
    this.league = newLeague('', '', { class: 'fa fa-gears' });
  }

  ngOnInit() {
    this.leagues = this.db.list('/leagues');
    this.shared.user.subscribe((z: any) => {
      // this.avatar = z.photoURL;
      this.league.commissioner = z.uid;
    });

    this.teams = this.db.list('/teams');
  }

  private submit() {
    this.leagues.push(this.league).then(() => {
      this.router.navigateByUrl('leagues');
    });

    // const player1: Player = {
    //   name: 'Matt Moore'
    // };
    // const team: Team = {
    //   name: 'Miami Dolphins',
    //   players: [
    //     player1
    //   ]
    // }    
    // this.teams.push(team);

  }

}
