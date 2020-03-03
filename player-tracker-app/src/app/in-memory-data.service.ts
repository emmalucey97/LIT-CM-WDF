import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

import {Player} from './player';

@Injectable({
  providedIn: 'root'
})


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const players = [
      { id: 1, name: 'Sarah Boyle', dob: '25/04/11', guardian: 'Dan Boyle',guardianNo: '0873302571' },
      { id: 2, name: 'Emma Lucey', dob: '26/08/11', guardian: 'Kevin Lucey',guardianNo: '0858820852' },
      { id: 3, name: 'Suzi Krupa', dob: '05/07/11', guardian: 'Iza Krupa',guardianNo: '08588095321' },
    ];
  return players;
  }
  genId(players: Player[]): number {
    return players.length > 0 ? Math.max(...players.map(player => player.id)) + 1 : 1;
  }
}
