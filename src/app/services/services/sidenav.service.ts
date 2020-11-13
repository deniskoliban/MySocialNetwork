import {ElementRef, Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {MatSidenav} from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  sidenav = new BehaviorSubject<ElementRef<MatSidenav>>(null);

  constructor() {
  }
}

