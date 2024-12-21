import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipantModule } from '../participant/participant.module';



@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class TeamModuleModule {
  id!: number;
  name!: string;
  projectName!: string;
  level!: string;
  projectDescription!: string;
  participants!: ParticipantModule[];
}
