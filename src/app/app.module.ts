import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TeamsComponent } from './teams/teams.component';
import { FormTeamComponent } from './form-team/form-team.component';
import { MyTeamsComponent } from './my-teams/my-teams.component';
import { ParticipantsComponent } from './participants/participants.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeamServiceService } from './service/team-service.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    TeamsComponent,
    FormTeamComponent,
    MyTeamsComponent,
    ParticipantsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    TeamServiceService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
