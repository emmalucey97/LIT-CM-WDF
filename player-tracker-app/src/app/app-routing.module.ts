import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlayerComponent} from './player/player.component';
import {PlayerFormComponent} from './player-form/player-form.component'
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { LoginComponent } from './auth/login.component';
import { EditComponent } from './edit/edit.component';
// import {LoggedInGuard} from './auth/logged-in.guard';
// import { GuestGuard } from './auth/guest.guard';

const routes: Routes = [
  { path:'', component:PlayerComponent},
  {path:'players', component: PlayerComponent},
  {path:'form', component: PlayerFormComponent},
  { path: 'detail/:id', component:PlayerDetailComponent},
  { path: 'login', component: LoginComponent},
  { path: 'edit', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
