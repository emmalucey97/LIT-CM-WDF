import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { catchError, map, filter } from 'rxjs/operators';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
private url = 'api/players';

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}; 
constructor(private http: HttpClient){}

getPlayers(): Observable<Player[]> {
  console.log("PlayerService::getPlayers()");
  return this.http.get<Player[]>(this.url);
}

getPlayer(id: number): Observable<Player> {
  const url = `${this.url}/${id}`;
  console.log("PlayerService::getPlayer() at url: ", url);
  return this.http.get<Player>(url);
}

updatePlayer(player: Player): Observable<any>{
  return this.http.put(this.url, player, this.httpOptions);
}

addPlayer(player: Player): Observable<Player>{
  return this.http.post<Player>(this.url, player, this.httpOptions);
}

deletePlayer(player: Player | number): Observable<Player>{
  const id = typeof player === 'number' ? player : player.id;
  const url = `${this.url}/${id}`;
  return this.http.delete<Player>(url, this.httpOptions);
}

}