import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateLeagueComponent } from './create-league/create-league.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { DraftComponent } from './draft/draft.component';

export const appRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'create-league', component: CreateLeagueComponent },
      { path: 'leagues', component: LeaguesComponent },
      { path: 'draft', component: DraftComponent }
    ] 
  }
    
];