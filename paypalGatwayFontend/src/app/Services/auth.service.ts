// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http';
// // import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
// import { TokenStorage } from '../core/tokenStorage';
// import { Observable } from 'rxjs';
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor(private http: HttpClient, private token: TokenStorage, private jwtHelper: JwtHelper, private _httpBack :HttpBackend) { }
//   baseUrl:any;
//   authenticate(username: string, password: string): Observable<any> {
//     const credentials = {username: username, password: password};
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type':  'application/json'
//       })
//     };
//     console.log('attempAuth ::');
//     return this.http.post<any>(`${this.baseUrl}authenticate`, credentials);
//   }

// }
