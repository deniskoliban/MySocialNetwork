import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {SidenavService} from '../../services/services/sidenav.service';
import {UserService} from '../../services/services/user.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';
import {HttpClient} from '@angular/common/http';
import {map, take} from 'rxjs/operators';
import {AuthService} from '../../services/services/auth.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, AfterViewInit {
  @ViewChild('sidenav') sidenav: ElementRef<MatSidenav>;
  userData: any;

  constructor(
    private sidenavService: SidenavService,
    ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.sidenavService.sidenav.next(this.sidenav);
  }


}
