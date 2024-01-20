import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

class Register {
  email: any;
  password: any;
  username: any;
  roleType: any;
}
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  registerForm = new Register()
  repeatPassword: any
  errorMessage: string
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onRegister() {
    console.log(this.registerForm);
    this.registerForm.roleType = ['employee']

    this.authService.register(this.registerForm).subscribe((reponse: any) => {
      console.log(reponse);

    }, err => {
      if (err.status == 201) {
        console.log('Woooooooork')
        Swal.fire(
          `OK`,
          'aller à la page de connexion',
          'success'
        ).then(()=>{
          this.router.navigateByUrl('auth/login')
        })
      } else {
        this.errorMessage = 'Merci de vérifier votre information.'
      }
    })


}

}
