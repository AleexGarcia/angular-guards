import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(){
    localStorage.setItem('token','fdsfkk121212');
  }

  logout(){
    localStorage.removeItem('token');
  }
}
