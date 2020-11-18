import { Injectable } from '@angular/core';
import { Subject, Observable   } from 'rxjs';
import { User } from '../models/User.model';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private users: User[] = [
    new User('Will', 'Alexander', 'will@will.com', '676398341', 'dfddfdf')
  ];
  userSubject = new Subject<User[]>();

  constructor(private httpClient: HttpClient) { }

  emitUsers(){
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    let appareilObject = {
      "username": user.firstName,
      "firstname": user.firstName,
      "lastname": user.lastName,
      "email": user.email,
      "password": user.password
    };
    this.httpClient
    .post('http://127.0.0.1:8000/api/users', appareilObject)
    .subscribe(
      () => {
        console.log('Enregistrement terminé !');
        this.users.push(user);
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
    this.emitUsers();
  }



  getPublicContent(): Observable<any> {
    return this.httpClient.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.httpClient.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.httpClient.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.httpClient.get(API_URL + 'admin', { responseType: 'text' });
  }

}
