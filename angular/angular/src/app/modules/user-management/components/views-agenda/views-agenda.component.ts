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
  sprints: any;
  me: any;
  tryEvent: any = [];
  calendarOptions: CalendarOptions = {
    locale: frLocale,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    plugins: [dayGridPlugin, timeGridWeek],
    initialView: 'timeGridWeek',
    slotMinTime: '08:00:00',
    slotMaxTime: '18:00:00',
    contentHeight: 500,
    aspectRatio: 5,
    titleFormat: { year: 'numeric', month: 'numeric' },
    events: [],
    eventClick: this.handleEventClick.bind(this)
  };

  constructor(private sprintService: SprintService, private userService: UserService) {
    this.userService.getUserById(this.id).subscribe(res => {
      this.me = res;
    });
  }

  id = localStorage.getItem('id');

  ngOnInit(): void {
    this.getSprints();
  }

  handleEventClick(info) {
    const text = "You won't be able to revert this " + info.event.title + " !";
    Swal.fire({
      title: 'Choose an action',
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete',
      cancelButtonText: 'Move to Trash'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteSprint(info.event.id);
      } else {
        this.moveSprintToTrash(info.event.id);
      }
    });
  }

  deleteSprint(sprintId: any) {
    this.sprintService.deleteSprint(sprintId).subscribe(res => {
      console.log(res);
      Swal.fire(
        'Deleted!',
        'Your sprint has been deleted.',
        'success'
      ).then(() => {
        window.location.reload()
      });
    });
  }

  moveSprintToTrash(sprintId: any) {
    this.sprintService.patchCorbeilSprint({ idSprint: sprintId,  })
      .subscribe(response => {
        console.log(response);
        Swal.fire(
          'Moved to Trash!',
          'The sprint has been moved to trash.',
          'success'
        ).then(() => {
          window.location.reload()
        });
      });
  }

  getSprints() {
    this.sprintService.getAllSprint().subscribe(res => {
      console.log(res);
      this.sprints = res;

      // Filter sprints with etat = false
      this.sprints = this.sprints.filter((sprint: any) => !sprint.corbeil);

      if (this.me.roles[0].id == 3) {
        this.sprints = this.sprints.filter((i: any) => {
          return i.user.id == this.id;
        });
      }

      if (this.me.roles[0].id == 2) {
        this.sprints = this.sprints.filter((i: any) => {
          return i.user.team?.id == this.me.team?.id;
        });
      }

      this.sprints.map(i => {
        i.datefin = i.datefin.slice(0, 16);
        i.datedebut = i.datedebut.slice(0, 16);
        const obj = {
          id: i.idSprint,
          title: i.nomSprint + ' ' + i.user.username,
          start: i.datedebut,
          end: i.datefin,
          backgroundColor: '#d71349',
          borderColor: '#d71349',
          textColor: 'white'
        };
        this.tryEvent.push(obj);
        this.calendarOptions.events = this.tryEvent;
      });
    });
  }


}
