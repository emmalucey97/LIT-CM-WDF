import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService} from './in-memory-data.service';
import { AppService } from './app.service';
import {environment} from '../environments/environment';
import { AngularFireModule} from '@angular/fire';
import { AngularFireAuthModule, AngularFireAuth} from '@angular/fire/auth';
import { AngularFirestoreModule} from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { PlayerFormComponent } from './player-form/player-form.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { LoginComponent } from './auth/login.component';
import { EditComponent } from './edit/edit.component';

// export function app_init(appService: AppService) {
//   return () => appService.initializeApp();
// }

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PlayerFormComponent,
    PlayerDetailComponent,
    EditComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuth,
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
