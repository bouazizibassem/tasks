import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-select-account',
  templateUrl: './select-account.component.html',
  styleUrls: ['./select-account.component.scss']
})
export class SelectAccountComponent implements OnInit {
  selectedCar:any;
  searchAccount:any;
  listAccount: any[] = [
    { position: 1, accountId: 1, name: "sami098", email:"sami@tanitlab.com", imgAccount: "../../../../../assets/images/demo/profile-picture-4.jpg" },
    { position: 2, accountId: 2, name: "zas",  email:"zas@tanitlab.com", imgAccount: "../../../../../assets/images/demo/profile-picture-2.jpg" },
    { position: 3, accountId: 3, name: "meriem145", email:"meriam@tanitlab.com", imgAccount: "../../../../../assets/images/demo/profile-picture-5.jpg" },
  ];


  constructor() { }

  ngOnInit(): void {
  }

  accountValueSelected:any;
  spaceName:any;
  imgSpaceName:any;
  emailSpaceName:any
  DataBoxVisible:boolean;

  accountSelected(event: any){
    this.spaceName = '';
    this.imgSpaceName = '';
    this.emailSpaceName = '';
    this.DataBoxVisible = false;

    this.accountValueSelected = event.value;

    if(this.accountValueSelected){
      for(let account of this.listAccount) {
        if(account.accountId === this.accountValueSelected){   
          this.spaceName = account.name;
          this.imgSpaceName = account.imgAccount;
          this.emailSpaceName = account.email;
          this.DataBoxVisible = true;
        }
      }
    }
   
    /*
    console.log(this.spaceName);
    console.log(this.imgSpaceName);
    console.log(this.emailSpaceName);
    */
    
  }

}
