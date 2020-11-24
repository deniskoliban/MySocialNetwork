import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {SidenavService} from '../../services/services/sidenav.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';
import {UserData} from '../../components/auth/store/authReducer';
import {getProfile} from '../profile/store/profile.actions';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, AfterViewInit {
  @ViewChild('sidenav') sidenav: ElementRef<MatSidenav>;

  constructor(
    private sidenavService: SidenavService,
    private store: Store<AppState>,
    ) { }

  ngOnInit(): void {
    this.store.dispatch(getProfile());
  }

  ngAfterViewInit(): void {
    this.sidenavService.sidenav.next(this.sidenav);
  }


}
