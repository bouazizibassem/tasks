import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-notification',
  templateUrl: './header-notification.component.html',
  styleUrls: ['./header-notification.component.scss']
})
export class HeaderNotificationComponent implements OnInit {

  numberOfMessage:number=3;

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

  constructor() { }

  ngOnInit(): void {
  }


  plusDeMessages(){  
    this.numberOfMessage = this.numberOfMessage+3;
   /*
    console.log(this.numberOfMessage);
    console.log(this.messageListe.length);
    */
    if(this.numberOfMessage <= this.messageListe.length){
      return this.numberOfMessage
    }else{
      return this.numberOfMessage = this.messageListe.length
    }
    
  }

}
