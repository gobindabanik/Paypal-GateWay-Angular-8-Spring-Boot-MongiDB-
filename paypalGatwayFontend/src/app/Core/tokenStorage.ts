import { Injectable } from '@angular/core';


const TOKEN_KEY = 'AuthToken';
const TOKEN_CAN_KEY = 'AuthTokenCan';
const ROLE_KEY = 'AuthRole';

@Injectable({
  providedIn: 'root'
})
export class TokenStorage {

  constructor() { }

  signOut() {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.removeItem(ROLE_KEY);
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,  token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveRole(role: any) {
    window.sessionStorage.removeItem(ROLE_KEY);
    window.sessionStorage.setItem(ROLE_KEY,  JSON.stringify(role));
  }

  public getRole(): any {
    return JSON.parse(sessionStorage.getItem(ROLE_KEY));
  }

  // Candiadte //

  signOutCandidate() {
    window.sessionStorage.removeItem(TOKEN_CAN_KEY);
    window.sessionStorage.clear();
  }

  public saveTokenCandidate(token: string) {
    window.sessionStorage.removeItem(TOKEN_CAN_KEY);
    window.sessionStorage.setItem(TOKEN_CAN_KEY,  token);
  }

  public getTokenCandidate(): string {
    return sessionStorage.getItem(TOKEN_CAN_KEY);
  }
}