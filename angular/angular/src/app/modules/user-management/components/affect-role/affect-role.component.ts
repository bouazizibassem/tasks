import { Component, OnInit ,Inject  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-affect-role',
  templateUrl: './affect-role.component.html',
  styleUrls: ['./affect-role.component.scss']
})
export class AffectRoleComponent implements OnInit {
  myrole : any

  constructor(@Inject(MAT_DIALOG_DATA)
    private data: any , private userService :UserService,private dialogRef: MatDialogRef<AffectRoleComponent>) {

      console.log('passe data ' , this.data)
     }

  ngOnInit(): void {
  }
  save(){
    var l = []
    l.push(this.myrole)
  
    
    console.log('data before edit ' , this.data)
    this.userService.EditUsers(this.data.id , l).subscribe(res=>{
      console.log(res)
      Swal.fire(
        `OK`,
        'aller à la page de list users',
        'success'
      ).then(()=>{
        this.dialogRef.close()
      })
    })
  }

}
