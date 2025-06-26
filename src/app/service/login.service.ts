import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, UserCredential } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private auth:Auth) { }
  login(email: string, password: string): Promise<UserCredential> {
    return signInWithPopud(this.auth, email, password);
  }
}
function signInWithPopud(auth: Auth, email: string, password: string): Promise<UserCredential> {
  throw new Error('Function not implemented.');
}

