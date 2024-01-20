import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
class Login {
  username: any
  password: any
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userme:any
  loginForm = new Login()
  errorMessage : string
  constructor( private authService: AuthService , private router : Router , private userService : UserService) { }
  user : any
  ngOnInit(): void {
  }



  Onlogin() {
    console.log(this.loginForm)

    //send request
    this.authService.login(this.loginForm).subscribe((response: any) => {
      //reponse 200
      console.log("reponse",response)
      this.user = response
      localStorage.setItem('auth' , this.user.accessToken)
      localStorage.setItem('id' , this.user.id)
      this.userService.getUserById(this.user.id).subscribe(res=>{
        this.userme = res
        this.router.navigateByUrl('view-user')
        // if(this.userme.roles[0].id == 1){
        //   this.router.navigateByUrl('liste-user')
        // }else{
        //   this.router.navigateByUrl('view-agenda')
  
        // }
       
        
      })
 
     
    } , (e : any)=>{
      // pas de response => error
      console.log('eroor TAG' , e.error)
      // message d'erreur 
      this.errorMessage =  e.error

    })

  }

}
