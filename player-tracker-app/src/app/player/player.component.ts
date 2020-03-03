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
  this.playerservice.getPlayers().subscribe(players => this.Players = players)
 }

 add(name: string, dob: string, guardian: string, guardianNo: string): void{
   name = name.trim();
   dob = dob.trim();
   guardian = guardian.trim();
   guardianNo = guardianNo.trim();
   
    this.playerservice.addPlayer({name, dob, guardian, guardianNo} as Player)
    .subscribe(player=> {this.Players.push(player)});
 }

delete(player:Player): void{
  this.Players = this.Players.filter(p => p !== player );
  this.playerservice.deletePlayer(player).subscribe();
}
}
