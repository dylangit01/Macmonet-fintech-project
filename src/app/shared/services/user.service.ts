import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MacError, User} from "../models/user";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getAllUser() {
    return this.http.get<MacError>(`${environment.apiUrl}/user`)
  }

  getUserById(id: string) {
    return this.http.get<MacError>(`${environment.apiUrl}/user/${id}`)
  }

  checkUserExisted(username: string) {
    return this.http.get<MacError>(`${environment.apiUrl}/user/checkuser/${username}`)
  }

  createUser(user: User) {
    return this.http.post<MacError>(`${environment.apiUrl}/user`, user)
  }
}
