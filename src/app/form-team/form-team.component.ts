import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeamServiceService } from '../service/team-service.service';

@Component({
  selector: 'app-form-team',
  templateUrl: './form-team.component.html',
  styleUrls: ['./form-team.component.css'],
})
export class FormTeamComponent {
  teamForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private teamService: TeamServiceService
  ) {
   
    this.teamForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')]],
      projectName: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')],
      ],
      level: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')]],
      projectDescription: ['', [Validators.required, Validators.minLength(5)]],
    });
  }


  addTeam(): void {
    if (this.teamForm.valid) {
      this.teamService.addTeam(this.teamForm.value).subscribe(
        (response) => {
          console.log('Team added successfully:', response);
          this.teamForm.reset();
        },
        (error) => {
          console.error('Error adding team:', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }
}
