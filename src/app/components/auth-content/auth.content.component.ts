import {Component, OnInit, ViewChild} from '@angular/core';
import {SidenavService} from '../../services/sidenav.service';
import {Observable} from 'rxjs';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-auth-content',
  templateUrl: './auth.content.component.html',
  styleUrls: ['./auth.content.component.css']
})
export class AuthContentComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private sidenavService: SidenavService) { }

  ngOnInit(): void {
    this.sidenavService.sidenavToggle = new Observable<MatSidenav>(subscriber => {
      subscriber.next(this.sidenav);
    });
  }

}
