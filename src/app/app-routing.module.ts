import { HomepageComponent } from './homepage/homepage.component';
import { TeamComponent } from './team/team.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomepageComponent, data : {current: 'homepage'}},
  { path: 'team', component: TeamComponent, data : {current: 'team'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
