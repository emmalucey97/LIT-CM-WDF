import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Player} from '../player';
import {PlayerService} from '../player.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  player:Player;
  constructor(private route:ActivatedRoute, private playerService: PlayerService) { }

  ngOnInit() {
  }

  getPlayer(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.playerService.getPlayer(id).subscribe(player => this.player = player);
  }

  updatePlayer(playerName: string, playerDOB: string, playerGuardian: string, playerContact: string): void{
    playerName = playerName.trim();
    playerDOB = playerDOB.trim();
    playerGuardian= playerGuardian.trim();
    playerContact = playerContact.trim();
     
      this.playerService.updatePlayer({playerName, playerDOB, playerGuardian, playerContact} as Player)
      .subscribe(player => this.player = player); 
   }

   delete(player: Player): void {
    this.player = this.player;
    this.playerService.deletePlayer(player).subscribe();
  }

}
