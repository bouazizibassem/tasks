import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SprintService } from 'src/app/services/sprint.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-sprint',
  templateUrl: './add-sprint.component.html',
  styleUrls: ['./add-sprint.component.scss']
})
export class AddSprintComponent {
  me: any;
  sprintForm = this.fb.group({
    user: [{}, Validators.required],
    nomSprint: [null, Validators.required],
    datedebut: [null, Validators.required],
    status: ["", Validators.required],
    datefin: [null, Validators.required],
  });

  id = localStorage.getItem('id');

  constructor(
    private fb: FormBuilder,
    private sprintService: SprintService,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.userService.getUserById(this.id).subscribe(res => {
      console.log(res);
      this.me = res;
    });
  }

  onSubmit(): void {
    this.sprintForm.value.user = this.me;
    this.sprintForm.value.status = 'IN_PROGRESS';
    console.log(this.sprintForm.value);

    this.sprintService.addSprint(this.sprintForm.value).subscribe(
      (res) => {
        console.log(res);
        this.sprintForm.reset({});
        this.showSuccessSnackbar();
      },
      (error) => {
        console.error(error);
        // Handle error and show an error snackbar if needed
      }
    );
  }

  showSuccessSnackbar(): void {
    this.snackBar.open('Sprint added successfully', 'Close', {
      duration: 3000,
      panelClass: 'success-snackbar' // Change from an array to a string
    }).afterDismissed().subscribe(() => {
      this.router.navigate(['/view-agenda']); // Replace with the actual path for redirection
    });
  }
}
