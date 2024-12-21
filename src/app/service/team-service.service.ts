import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../models/team.model';


@Injectable({
  providedIn: 'root',
})
export class TeamServiceService {
  private apiUrl = 'http://localhost:3000/teams'; // L'URL de l'API JSON

  constructor(private http: HttpClient) {}


  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.apiUrl);
  }


  addTeam(team: Team): Observable<Team> {
    return this.http.post<Team>(this.apiUrl, team);
  }


  getTeamById(id: number): Observable<Team> {
    return this.http.get<Team>(`${this.apiUrl}/${id}`);
  }


  updateTeam(id: number, updatedTeam: Team): Observable<Team> {
    return this.http.put<Team>(`${this.apiUrl}/${id}`, updatedTeam);
  }

  deleteTeam(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
