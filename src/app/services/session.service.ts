import { Injectable } from '@angular/core';
import { ISession } from '../shared/components/item/models/session.model';
import { userInfo } from 'os';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  dataUser$ = new BehaviorSubject<ISession>({ user: '', token: '', fullName: '' });
  data$ = new Subject();

  constructor() {}

  validateUser(user: string, Password: string) {
    if (user && Password) {
      const data = { user, token: 'JFsldOP', fullName: 'Juani Darsaut' };
      this.dataUser$.next(data);
      //this.dataUser = { user, token: 'JFsldOP', fullName: 'Juani Darsaut' };
      localStorage.setItem('user', JSON.stringify(data));
      return true;
    }
    return false;
  }

  loadSession(): boolean {
    if (localStorage.getItem('user')) {
      const session = JSON.parse(localStorage.getItem('user')!);
      this.dataUser$.next(session);
      return true;
    }
    return false;
  }
}
