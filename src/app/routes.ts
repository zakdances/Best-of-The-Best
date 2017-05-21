import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


export const appRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent }
    ] 
  }
    
];