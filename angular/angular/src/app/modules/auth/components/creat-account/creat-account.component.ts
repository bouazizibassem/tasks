import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creat-account',
  templateUrl: './creat-account.component.html',
  styleUrls: ['./creat-account.component.scss']
})
export class CreatAccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logoSelected:boolean=false;

  inputFile(fileInputEvent: any) {
    if (fileInputEvent.target.files[0]) {
      this.logoSelected = true;
    } else {
      this.logoSelected = false;
    }
  }

}
