import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

import {Player} from './player';

@Injectable({
  providedIn: 'root'
})


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const players = [
      { id: 1, playerName: 'Sarah Boyle', playerDOB: '25/04/11', playerGuardian: 'Dan Boyle', playerContact: '0873302571' },
      { id: 2, playerName: 'Emma Lucey', playerDOB: '26/08/11', playerGuardian: 'Kevin Lucey',playerContact: '0858820852' },
      { id: 3, playerName: 'Suzi Krupa', playerDOB: '05/07/11', playerGuardian: 'Iza Krupa',playerContact: '08588095321' },
    ];
  return players;
  }
  genId(players: Player[]): number {
    return players.length > 0 ? Math.max(...players.map(player => player.id)) + 1 : 1;
  }
}
