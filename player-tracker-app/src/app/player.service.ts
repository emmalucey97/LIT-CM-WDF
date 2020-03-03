import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import { Player } from './player';
@Injectable({
  providedIn: 'root'
})
export class PlayerService {
private playersurl = "api/players";

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}; 
constructor(private http: HttpClient){}

getPlayers(): Observable<Player[]> {
  return this.http.get<Player[]>(this.playersurl);
}

getPlayer(id: number): Observable<Player> {
  const url = `${this.playersurl}/${id}`;
  return this.http.get<Player>(url);
}

updatePlayer(player: Player): Observable<any>{
  return this.http.put(this.playersurl, player, this.httpOptions);
}

addPlayer(player: Player): Observable<Player>{
  return this.http.post<Player>(this.playersurl, player, this.httpOptions);
}

deletePlayer(player: Player | number): Observable<Player>{
  const id = typeof player === 'number' ? player : player.id;
  const url = `${this.playersurl}/${id}`;
  return this.http.delete<Player>(url, this.httpOptions);
}

}