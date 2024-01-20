import { Component, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  id = localStorage.getItem('id')
  screenWidth!: number;
  userme:any
  public isExpanded: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver , private userService : UserService,private router : Router) {
    this.getScreenSize();
    this.userService.getUserById(this.id).subscribe(res=>{
      this.userme = res
      console.log("from navbar",res);
      
    })
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.screenWidth = window.innerWidth;
    // console.log(this.screenWidth);     
    if (this.screenWidth <= 959) {
      this.isExpanded = true;
    } else {
      this.isExpanded = false;
    }
  }

  logout(){
    window.localStorage.removeItem('auth')
    window.localStorage.removeItem('id')
    this.router.navigateByUrl('/auth/login')
  }

}
