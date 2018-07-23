import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { VoteComponent } from  './vote/vote.component';
import { AppComponent } from './app.component';

const routes: Routes = [  {path: 'login', component: LoginComponent},
{path: 'dashboard', component: DashboardComponent},
{path: 'create', component: CreateComponent},
{path: 'vote/:id', component: VoteComponent},
{path: '', component: AppComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
