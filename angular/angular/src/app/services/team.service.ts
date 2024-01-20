import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http : HttpClient) { }

  addTeam(data : any){
    return this.http.post('http://localhost:8081/SpringMVC/team/addteam' , data)
  }

  affectMangerToTeam(idteam : any , idManger){
    return this.http.post('http://localhost:8081/SpringMVC/team/affect/'+idteam+'/'+idManger , {})
  }


}
