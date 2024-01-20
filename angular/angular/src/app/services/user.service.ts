import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  getUserById(id:any){
    return this.http.get('http://localhost:8081/SpringMVC/user/get/'+id)
  }
  getUsers(){
    return this.http.get('http://localhost:8081/SpringMVC/user')
  }

  EditUsers(id : any , l : any){
    return this.http.put('http://localhost:8081/SpringMVC/user/'+id , l)
  }
}
