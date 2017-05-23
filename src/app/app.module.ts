import { environment } from '../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import 'hammerjs';

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
 import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { appRoutes } from './routes';
import { HomeComponent } from './home/home.component';
import { CreateLeagueComponent } from './create-league/create-league.component';
import { DraftComponent } from './draft/draft.component';
import { SharedService } from './shared.service';
import { LeaguesComponent } from './leagues/leagues.component';
import { UserNameFromIdPipe } from './user-name-from-id.pipe';
import { UserAvatarFromIdPipe } from './user-avatar-from-id.pipe';
import { LeagueNameFromIdPipe } from './league-name-from-id.pipe';
import { LeagueAvatarFromIdPipe } from './league-avatar-from-id.pipe';
import { LeagueComponent } from './league/league.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CreateLeagueComponent,
    DraftComponent,
    LeaguesComponent,
    UserNameFromIdPipe,
    UserAvatarFromIdPipe,
    LeagueNameFromIdPipe,
    LeagueAvatarFromIdPipe,
    LeagueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MaterialModule,
    NgxDatatableModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
