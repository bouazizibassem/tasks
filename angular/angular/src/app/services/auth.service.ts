import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  login(data : any){
    return this.http.post('http://localhost:8081/SpringMVC/auth/signin' ,data) 
  }

  register(data : any){
    const formData: FormData = new FormData();
    formData.append('username', data.username);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('roleType', data.roleType);
 
    return this.http.post('http://localhost:8081/SpringMVC/auth/signUp' ,formData) 
  }
}
