import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SprintService {

  constructor(private http : HttpClient) { }

  addSprint(data : any){
    return this.http.post('http://localhost:8081/SpringMVC/Sprint/addsprint' , data)
  }

  getAllSprint(){
    return this.http.get('http://localhost:8081/SpringMVC/Sprint/sprints')
  }
  patchCorbeilSprint(data:any){
    return this.http.put('http://localhost:8081/SpringMVC/Sprint/updateSprint',data)
  }
  patchCorbeilSprintO(data:any){
    return this.http.put('http://localhost:8081/SpringMVC/Sprint/updateSprintC',data)
  }

  deleteSprint(id : any){
    var obj = {
      idSprint : id
    }
    return this.http.post('http://localhost:8081/SpringMVC/Sprint/deleteSprint/'+id ,obj)
  }
}
