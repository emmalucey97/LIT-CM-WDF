import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent  {

  constructor() { }

  playerForm = new FormGroup({
    playerName: new FormControl(''),
    playerDob: new FormControl(''),
    playerGuard: new FormControl(''),
    playerContact: new FormControl(''),
  });

}
