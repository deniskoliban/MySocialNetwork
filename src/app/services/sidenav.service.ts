import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {MatSidenav} from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  sidenavToggle: Observable<MatSidenav>;

  constructor() {
  }
}

