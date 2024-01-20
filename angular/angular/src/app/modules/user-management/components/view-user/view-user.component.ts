import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  /*** Animation Task Number ***/
  taskcount:number=0; 
  taskcountstop:any = setInterval(()=>{
    this.taskcount++;
    if(this.taskcount == 145)
    {
      clearInterval(this.taskcountstop);
    }
  },10)
  /******/
  processed:number=0; 
  processedstop:any = setInterval(()=>{
    this.processed++;
    if(this.processed == 75)
    {
      clearInterval(this.processedstop);
    }
  },10)
  /******/
  completed:number=0; 
  completedstop:any = setInterval(()=>{
    this.completed++;
    if(this.completed == 70)
    {
      clearInterval(this.completedstop);
    }
  },10)

}
