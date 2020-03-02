import { Component, OnInit } from '@angular/core';
import {Player} from '../player';
import {PlayerService} from '../player.service';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
 players: Player = {
   id:1,
   name:'sarah boyle',
   dob: '25/04/11',
   guardian:'Dan Boyle',
   guardianNo:'0872202971'
 }
  constructor() { }

  ngOnInit() {
  }

 getPlayers(){

 }


}
