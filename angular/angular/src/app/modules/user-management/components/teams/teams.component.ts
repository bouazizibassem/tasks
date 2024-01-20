import { Component, OnInit } from '@angular/core';
import { AddTeamComponent } from '../add-team/add-team.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { AffectTeamComponent } from '../affect-team/affect-team.component';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  me: any
  allUser: any
  nb : any = 0
  constructor(private dialog: MatDialog, private userService: UserService) {
    this.userService.getUserById(localStorage.getItem('id')).subscribe(res => {
      this.me = res
    })
    this.userService.getUsers().subscribe(res => {
      this.allUser = res
      console.log(this.allUser)
      this.allUser.map(i=>{
        if(i.team && this.me.team && i.team.id == this.me.team.id){
          this.nb = this.nb +1
        }
      })
    })
  }

  ngOnInit(): void {
  }


  addTeam() {
    this.dialog.open(AddTeamComponent, {
    });
  }

  affectTeam(data :any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = data
    var dialog = this.dialog.open(AffectTeamComponent,dialogConfig);
  }

}
