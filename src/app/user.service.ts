import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from './User';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'http://localhost:8080/user-portal/api';

  constructor(
    private http: HttpClient
  ) { }
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.userUrl);
  }

  getUser(id: string): Observable<User>{
    const url = `${this.userUrl}/${id}`;
    return this.http.get<User>(url);
  }

  deleteUser(id: string): Observable<{}>{
    const url =` ${this.userUrl}/${id}`;
    return this.http.delete(url);
  }

  addUser(user: User): Observable<any>{
    return this.http.post(this.userUrl, user , httpOptions);
  }

  updateUser(user: User) : Observable<any>{
    return this.http.put(this.userUrl+'/'+ user.id, user, httpOptions );
  }
  
}
