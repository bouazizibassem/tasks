
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TeamService } from 'src/app/services/team.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-affect-team',
  templateUrl: './affect-team.component.html',
  styleUrls: ['./affect-team.component.scss']
})
export class AffectTeamComponent implements OnInit {
  allUsers: any
  returnTeam: any
  id: any
  user: any
  constructor(@Inject(MAT_DIALOG_DATA)
  private data: any, private userService: UserService, private teamService: TeamService, private dialogRef: MatDialogRef<AffectTeamComponent>) {
    this.id = localStorage.getItem('id')
  }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers() {
    this.userService.getUsers().subscribe(res => {
      console.log(res)
      this.allUsers = res
      this.allUsers = this.allUsers.filter(i => { return (i.roles[0].id == 3 && i.team == null) })
    })
  }

  addTeam() {
    this.teamService.affectMangerToTeam(this.data, this.user).subscribe(res => {
      console.log(res)
      Swal.fire(
        `OK`,
        'vous pouvez affecter un autre !',
        'success'
      ).then(() => {
        this.user = null
      })
    })

  }

}

