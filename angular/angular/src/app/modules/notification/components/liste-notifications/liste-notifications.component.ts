import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

interface UserListe {
  position: number;
  userID: number;
  name: string;
  role: string;
  pathImg: string;
}


@Component({
  selector: 'app-liste-notifications',
  templateUrl: './liste-notifications.component.html',
  styleUrls: ['./liste-notifications.component.scss']
})
export class ListeNotificationsComponent implements OnInit {

/***for test ***/
UserAdminId: number = 4;
/***************/
searchBlock: boolean = false;
FilterMsg: boolean = false;
groupChat: boolean = false;
blockListeMessage: boolean = true;
blockContentMessage: boolean = true;
screenWidth!: number;
screenWidthAction: boolean = false;
newMessageOpened: boolean = false;
selectedValue:any;
fileIsSelected: boolean = false;
userInfoBlock:boolean=false;
itemsTable:any;
userData:any;
mutipleSelect:boolean;

idUser: number;
nameUser: string;
imgUser: string;
eventValue: any;
maDate: any;
nameUserAdmin:string;
imgUserAdmin:string;


searchUser:any;
userListe: UserListe[] = [
  { position: 1, userID: 1, name: "Patrice Dubois", role: "user", pathImg: "../../../../../assets/images/demo/profile-picture-1.jpg" },
  { position: 2, userID: 2, name: "Roberta Klein", role: "user", pathImg: "../../../../../assets/images/demo/profile-picture-2.jpg" },
  { position: 3, userID: 3, name: "Albert Poirier", role: "user", pathImg: "../../../../../assets/images/demo/profile-picture-3.jpg" },
  { position: 4, userID: 5, name: "Casemiro Schneider", role: "user", pathImg: "../../../../../assets/images/demo/profile-picture-4.jpg" },
  { position: 5, userID: 6, name: "Marie Laurent", role: "user", pathImg: "../../../../../assets/images/demo/profile-picture-5.jpg" },
  { position: 6, userID: 7, name: "Patrice Dubois", role: "user", pathImg: "../../../../../assets/images/demo/profile-picture-1.jpg" },
  { position: 7, userID: 8, name: "Roberta Klein", role: "user", pathImg: "../../../../../assets/images/demo/profile-picture-2.jpg" },
  { position: 8, userID: 9, name: "Albert Poirier", role: "user", pathImg: "../../../../../assets/images/demo/profile-picture-3.jpg" },
  { position: 9, userID: 10, name: "Casemiro Schneider", role: "user", pathImg: "../../../../../assets/images/demo/profile-picture-4.jpg" },
  { position: 10, userID: 11, name: "Marie Laurent", role: "user", pathImg: "../../../../../assets/images/demo/profile-picture-5.jpg" },
  { position: 11, userID: 4, name: "Sami Darraji", role: "admin", pathImg: "../../../../../assets/images/pict-user.jpg" },
];


/**************************/

searchText:any;
messageListe: any[] = [
  { position: 1, idMessage:1, type: 'message', title: 'Message from', date: '10:26', vu: false, sendBy: 1, receiverId: 4, nameSender: 'Patrice', text: 'Salut Sam, je vous contact pour ....  adipisicing elit. Ad magnam quae distinctio debitis quo sit laboriosam molestias.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad magnam quae distinctio debitis quo sit laboriosam molestias.' },
  { position: 2, idMessage:2, type: 'task', title: 'You have new task', date: '1 hour ago', vu: false, sendBy: 4, receiverId: 4, nameSender: 'Admin', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad magnam quae distinctio debitis quo sit laboriosam molestias.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad magnam quae distinctio debitis quo sit laboriosam molestias.' },
  { position: 3, idMessage:3, type: 'message', title: 'Message from', date: '2 hours ago', vu: false, sendBy: 2, receiverId: 4, nameSender: 'Roberta', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad magnam quae distinctio debitis quo sit laboriosam molestias.' },
  { position: 4, idMessage:4, type: 'user', title: 'welcome to our new employee', date: '13-10-22', vu: false, sendBy: 4, receiverId: 4, nameSender: 'Admin', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad magnam quae distinctio debitis quo sit laboriosam molestias.' },
  { position: 5, idMessage:5, type: 'message', title: 'Message from', date: '12-10-22', vu: true, sendBy: 4, receiverId: 4, nameSender: 'Sami', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad magnam quae distinctio debitis quo sit laboriosam molestias.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad magnam quae distinctio debitis quo sit laboriosam molestias.' },
  { position: 6, idMessage:6, type: 'role', title: 'You have new role', date: '08-10-22', vu: true, sendBy: 4, receiverId: 4, nameSender: 'Admin', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad magnam quae distinctio debitis quo sit laboriosam molestias.' },
  { position: 7, idMessage:7, type: 'message', title: 'Message from', date: '06-10-22', vu: true, sendBy: 3, receiverId: 4, nameSender: 'Albert', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad magnam quae distinctio debitis quo sit laboriosam molestias.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad magnam quae distinctio debitis quo sit laboriosam molestias.' },
  { position: 8, idMessage:8, type: 'message', title: 'Message from', date: '29-09-22', vu: true, sendBy: 5, receiverId: 4, nameSender: 'Casemiro', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad magnam quae distinctio debitis quo sit laboriosam molestias.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad magnam quae distinctio debitis quo sit laboriosam molestias.' },
  { position: 9, idMessage:9, type: 'message', title: 'Message from', date: '29-09-22', vu: true, sendBy: 6, receiverId: 4, nameSender: 'Marie', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad magnam quae distinctio debitis quo sit laboriosam molestias.' },
  { position: 10, idMessage:10, type: 'message', title: 'Message from', date: '27-09-22', vu: true, sendBy: 2, receiverId: 4, nameSender: 'Roberta', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad magnam quae distinctio debitis quo sit laboriosam molestias.' },
  { position: 11, idMessage:11, type: 'role', title: 'You have new role', date: '23-09-22', vu: true, sendBy: 4, receiverId: 4, nameSender: 'Admin', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad magnam quae distinctio debitis quo sit laboriosam molestias.' },
];

/*************************/

Messages: any[] = [
  {
    idMessage: 1, nameUser: 'Patrice Dubois', textMessage: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad magnam quae distinctio debitis quo sit laboriosam molestias, consequatur quisquam, magni odio adipisci. Id modi libero ipsum reprehenderit nesciunt beatae nam!',
    dateMessage: '03-09-22', sendBy: 1, sendTo: 4, type: 'message',  vu: true, lastMessage: false
  },
  {
    idMessage: 2, nameUser: 'Patrice Dubois', textMessage: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    dateMessage: '05-09-22', sendBy: 1, sendTo: 4, type: 'message',  vu: true, lastMessage: false
  },
  {
    idMessage: 3, nameUser: 'Sami Darraji',  textMessage: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad magnam quae distinctio debitis quo sit laboriosam molestias.',
    dateMessage: '11-09-22', sendBy: 4, sendTo: 1, type: 'message',  vu: true, lastMessage: false
  },
  {
    idMessage: 4, nameUser: 'Patrice Dubois', textMessage: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    dateMessage: '05-09-22', sendBy: 1, sendTo: 4, type: 'message',  vu: true, lastMessage: true
  },
  {
    idMessage: 5, nameUser: 'Sami Darraji', textMessage: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad magnam quae distinctio debitis quo sit laboriosam molestias, consequatur quisquam, magni odio adipisci. Id modi libero ipsum reprehenderit nesciunt beatae nam!orem ipsum dolor, sit amet consectetur adipisicing elit. Magni a aspernatur rem veritatis provident error ut optio maiores quaerat, quibusdam, nobis, dolorum amet Eligendi ducimus eveniet, illum illo recusandae quasi.',
    dateMessage: '17-09-22', sendBy: 4, sendTo: 1, type: 'message',  vu: true, lastMessage: true
  },
  {
    idMessage: 6, nameUser: 'Albert Poirier', typeMessage: 'sendByme', textMessage: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad magnam quae distinctio debitis quo sit laboriosam molestias, consequatur quisquam, magni odio adipisci. Id modi libero ipsum reprehenderit nesciunt beatae nam!orem ipsum dolor, sit amet consectetur adipisicing elit. Magni a aspernatur rem veritatis provident error ut optio maiores quaerat, quibusdam, nobis, dolorum amet Eligendi ducimus eveniet, illum illo recusandae quasi.',
    dateMessage: '17-09-22', sendBy: 4, sendTo: 3, type: 'message',  vu: true, lastMessage: true,
  },
  {
    idMessage: 7, nameUser: 'Roberta Klein', typeMessage: 'sendByme', textMessage: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad magnam quae distinctio debitis quo sit laboriosam molestias, consequatur quisquam, magni odio adipisci. Id modi libero ipsum reprehenderit nesciunt beatae nam!orem ipsum dolor, sit amet consectetur adipisicing elit. Magni a aspernatur rem veritatis provident error ut optio maiores quaerat, quibusdam, nobis, dolorum amet Eligendi ducimus eveniet, illum illo recusandae quasi.',
    dateMessage: '17-09-22', sendBy: 2, sendTo: 4, type: 'message',  vu: true, lastMessage: true,
  },
]


@ViewChild('endOfChat') endOfChat: ElementRef;

constructor() {
  this.getScreenSize();
}

ngOnInit(): void { }

/****************/

@HostListener('window:resize', ['$event'])
getScreenSize() {
  this.screenWidth = window.innerWidth;
  if (this.screenWidth <= 767) {
    this.blockContentMessage = false;
    this.blockListeMessage = true;
  } else {
    this.blockContentMessage = true;
    this.blockListeMessage = true;
    this.screenWidthAction = false;
  }
}

/****************/

returnToMessage() {
  this.blockContentMessage = false;
  this.blockListeMessage = true;
}

filterMessageListe(){
  if(this.FilterMsg === true){
    this.FilterMsg = false;
  }else{
    this.FilterMsg = true;
  }
}

groupUserChat(){
  if(this.groupChat === false){
    this.groupChat = true;
  }else{
    this.groupChat = false;
  }
}

/****************/

showMessage(id: number) {
  this.scrollToBottom();
  this.getUser(id,false);

  if (this.screenWidth <= 767) {
    if (this.newMessageOpened === true) {
      this.newMessageOpened = false;
      this.screenWidthAction = false;
    }
    this.blockContentMessage = true;
    this.blockListeMessage = false;
  } else {
    if (this.newMessageOpened === true) {
      this.newMessageOpened = false;
    }
    this.blockContentMessage = true;
    this.blockListeMessage = true;
  }

  this.resetUserSelectedValue();

}
/****************/
scrollToBottom() {
  setTimeout(() => {
    if (this.endOfChat) {
      this.endOfChat.nativeElement.scrollIntoView({ behavior: "smooth" })
    }
  }, 100);
}
/*******************/
inputFile(fileInputEvent: any) {
  if (fileInputEvent.target.files[0]) {
    this.fileIsSelected = true;
  } else {
    this.fileIsSelected = false;
  }
}
/*******************/
btnNewMessage() {

  if (this.screenWidth > 767) {
    if (this.newMessageOpened === false) {
      this.newMessageOpened = true;
    } else {
      this.newMessageOpened = false;
      this.resetUserSelectedValue();
    }
    this.screenWidthAction = false;
  }

  if (this.screenWidth <= 767) {
    if (this.newMessageOpened === false) {
      this.newMessageOpened = true;
      this.blockListeMessage = false;
      this.blockContentMessage = true;
      this.screenWidthAction = true;
    } else {
      this.newMessageOpened = false;
      this.blockListeMessage = true;
      this.blockContentMessage = false;
      this.screenWidthAction = false;
      this.resetUserSelectedValue();
    }
  }
  this.userInfoBlock = false;

}
/******************** */

userSelected(event: any, multiple:boolean) {

  this.eventValue = event.value;
  this.mutipleSelect = multiple
  
  this.getUser( this.eventValue, this.mutipleSelect );
  this.resetUserSelectedValue();

  this.maDate = new Date();
  // console.log('this.maDate : ' + this.maDate);
}
/********************/



getUser(items:any, mutipleSelect:boolean) {

  this.itemsTable=[];
  this.userData=[];
  this.userInfoBlock = false;

  this.itemsTable.push(items);
   
  if(mutipleSelect === false){
    for(let user of this.userListe) {

      if(user.userID === items) {
        this.nameUser = user.name;
        this.imgUser = user.pathImg;
        this.idUser = user.userID;
      }
      if(user.userID === this.UserAdminId){
        this.nameUserAdmin = user.name;
        this.imgUserAdmin = user.pathImg;
      }
    }
   
    this.userData.push( [this.nameUser, this.imgUser, this.idUser]);
    this.userInfoBlock = true;

  }else{
    this.itemsTable[0].map((item:any) => {
          for(let user of this.userListe) {
            if(user.userID === item) {
              this.nameUser = user.name;
              this.imgUser = user.pathImg;
              this.idUser = user.userID;
            }
            if(user.userID === this.UserAdminId){
              this.nameUserAdmin = user.name;
              this.imgUserAdmin = user.pathImg;
            }
          } // end For

          this.userData.push( [this.nameUser, this.imgUser, this.idUser]);
          this.userInfoBlock = true;
   
        }); // end itemsTable[0].map          
  } // end else if
  this.resetUserSelectedValue();
}
/********************/
resetUserSelectedValue() {
  this.eventValue = '';
  this.nameUser = '';
  this.imgUser = '';
  this.itemsTable = [];
  this.idUser = null;
}

}
