import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridWeek from '@fullcalendar/timegrid';
import frLocale from '@fullcalendar/core/locales/fr';
import { SprintService } from 'src/app/services/sprint.service';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-views-agenda',
  templateUrl: './views-agenda.component.html',
  styleUrls: ['./views-agenda.component.scss']
})
export class ViewsAgendaComponent implements OnInit {
  sprints: any
  me: any
  tryEvent: any = []
  calendarOptions: CalendarOptions = {
    locale: frLocale,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    plugins: [dayGridPlugin, timeGridWeek],
    initialView: 'timeGridWeek',
    // slotDuration: '18:00:00',    // Set the duration of each time slot
    slotMinTime: '08:00:00',
    slotMaxTime: '18:00:00',
    contentHeight: 500,
    aspectRatio: 5,
    titleFormat: { year: 'numeric', month: 'numeric' },
    events: [

    ],
    eventClick: this.handleEventClick.bind(this)
  };
  constructor(private sprintService: SprintService, private userService: UserService) {
    this.userService.getUserById(this.id).subscribe(res => {
      this.me = res
    })
  }
  id = localStorage.getItem('id')
  ngOnInit(): void {
    this.getSprints()
  }
  handleEventClick(info) {
    var text = "You won't be able to revert this " + info.event.title + " !"
    Swal.fire({
      title: 'Are you sure?',
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(info.event.id)
        this.sprintService.deleteSprint(info.event.id).subscribe(res => {
          console.log(res);
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          ).then(() => {
            window.location.reload()
          })
        })


      }
    })
  }

  getSprints() {
    this.sprintService.getAllSprint().subscribe(res => {
      console.log(res)
      this.sprints = res
      if (this.me.roles[0].id == 3) {
        this.sprints = this.sprints.filter((i: any) => {
          return i.user.id == this.id
        })
      }

      if (this.me.roles[0].id == 2) {
        this.sprints = this.sprints.filter((i: any) => {
          return i.user.team?.id == this.me.team?.id
        })
      }

      this.sprints.map(i => {
        i.datefin = i.datefin.slice(0, 16)
        i.datedebut = i.datedebut.slice(0, 16)
        var obj = {
          id: i.idSprint,
          title: i.nomSprint + " " + i.user.username,
          start: i.datedebut,
          end: i.datefin,
          backgroundColor: '#d71349', // Customize background color
          borderColor: '#d71349', // Customize border color
          textColor: 'white' // Customize text color
        }
        this.tryEvent.push(obj)
        this.calendarOptions.events = this.tryEvent
      })
    })
  }

}
