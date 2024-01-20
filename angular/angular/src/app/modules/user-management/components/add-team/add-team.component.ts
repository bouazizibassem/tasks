import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TeamService } from 'src/app/services/team.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

class Team {
  teamname : any 
  manager : any
}
@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {
  team = new Team()
  allUsers : any
  returnTeam : any
  id : any
  constructor(private userService : UserService , private teamService : TeamService , private dialogRef: MatDialogRef<AddTeamComponent>) {
    this.id= localStorage.getItem('id')
   }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(){
    this.userService.getUsers().subscribe(res=>{
      console.log(res)
      this.allUsers = res
      this.allUsers = this.allUsers.filter(i=>{return i.roles[0].id == 3})
    })
  }

  addTeam(){
    console.log(this.team);
    this.teamService.addTeam(this.team).subscribe(res=>{
      console.log(res)
      this.returnTeam = res
      this.teamService.affectMangerToTeam(this.returnTeam.id , this.id).subscribe(res=>{
        console.log(res)
        Swal.fire(
          `OK`,
          'maintenant vous pouvez affecter des employee à votre équipe.',
          'success'
        ).then(()=>{
          this.dialogRef.close()
        })
      })
    })
    
  }

}
