import { Injectable } from "@angular/core";
import { LocalStoreService } from "./local-store.service";
import { Router } from "@angular/router";
import {BehaviorSubject, Observable, of} from "rxjs";
import {delay, map} from "rxjs/operators";
import {MacError, User} from "../models/user";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class AuthService {                // Below all comments are original codes

  // // Only for demo purpose
  authenticated = true;

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient,
              private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem(environment.userStoreKey)))
    this.currentUser = this.currentUserSubject.asObservable()
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value
  }

//   public hasRight(roles: string[]): boolean {
//     if(this.currentUserValue &&
//         this.currentUserValue.user &&
//         this.currentUserValue.user.role.some(
//           r = roles.indexOf(r.toLowerCase() > -1)
//         )) {
//       return true;
//     }
//       return false
// }

  signin(email: string, password: string) {
    return this.http.post<MacError>(`${environment.apiUrl}/auth/login`, {email, password})
      .pipe(map(res => {
        console.log('login successfully', res)
        if (res.data && res.data.token) {
          localStorage.setItem(environment.userStoreKey, JSON.stringify(res.data))
          this.currentUserSubject.next(res.data)
        }
        return res
      }))
  }

  signout() {
    localStorage.removeItem(environment.userStoreKey)
    this.currentUserSubject.next(null)
    this.router.navigateByUrl("/sessions/signin")
  }























  // constructor(
  //   private store: LocalStoreService, private router: Router) {
  //   this.checkAuth();
  // }
  //
  // checkAuth() {
  //   this.authenticated = this.store.getItem("demo_login_status");
  // }
  //
  // getuser() {
  //   return of({});
  // }
  //
  // signin(credentials) {
  //   this.authenticated = true;
  //   this.store.setItem("demo_login_status", true);
  //   return of({}).pipe(delay(1500));
  // }
  //
  // signup(credentials) {
  //   this.authenticated = true;
  //   this.store.setItem("demo_login_status", true);
  //   return of ({}).pipe(delay(1500));
  // }
  //
  // signout() {
  //   this.authenticated = false;
  //   this.store.setItem("demo_login_status", false);
  //   this.router.navigateByUrl("/sessions/signin");
  // }



}
