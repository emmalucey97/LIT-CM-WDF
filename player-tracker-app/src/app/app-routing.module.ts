import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlayerComponent} from './player/player.component';
import {PlayerFormComponent} from './player-form/player-form.component'

const routes: Routes = [
  {path:'', component:PlayerComponent},
  {path:'players', component: PlayerComponent},
  {path:'form', component: PlayerFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
