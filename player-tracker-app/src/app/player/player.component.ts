import { Component, OnInit } from '@angular/core';
import {Player} from '../player';
import {PlayerService} from '../player.service';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
 Players: Player[];
 
  constructor(private playerservice: PlayerService) { }

  ngOnInit() {
    this.getPlayers();
  }

 getPlayers():void {
  this.playerservice.getPlayers().subscribe(players => this.Players = players);
 }

 add(playerName: string, playerDOB: string, playerGuardian: string, playerContact: string): void{
  playerName = playerName.trim();
  playerDOB = playerDOB.trim();
  playerGuardian= playerGuardian.trim();
  playerContact = playerContact.trim();
   
    this.playerservice.addPlayer({playerName, playerDOB, playerGuardian, playerContact} as Player)
    .subscribe(player=> {this.Players.push(player)});
 }

delete(player:Player): void{
  this.Players = this.Players.filter(p => p !== player );
  this.playerservice.deletePlayer(player).subscribe();
}
}
