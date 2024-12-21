import { Component, OnInit } from '@angular/core';
import { TeamServiceService } from '../service/team-service.service';
import { Team } from '..';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent implements OnInit {
  teams: Team[] = [];

  constructor(private teamService: TeamServiceService) {}

  ngOnInit(): void {
    this.teamService.getTeams().subscribe((data) => {
      this.teams = data;
    });
  }
}
