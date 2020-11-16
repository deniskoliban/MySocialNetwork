import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {SidenavService} from '../../services/services/sidenav.service';
import {Subscription} from 'rxjs';
import {MatSidenav} from '@angular/material/sidenav';
import {AuthService} from '../../services/services/auth.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  sidenavSubscription: Subscription;
  sidebarBtnToggleColor: string = null;
  sidebar: any;

  constructor(
    private sidenavService: SidenavService,
    public authService: AuthService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('auth')
      .subscribe(
        (state) => {
          if (state.user) {
            this.sidebarBtnToggleColor = 'primary';
          } else {
            this.sidebarBtnToggleColor = null;
          }
        }
      );
    this.sidenavSubscription = this.sidenavService.sidenav.subscribe((sidebar) => {
      if (sidebar) {
        this.sidebar = sidebar;
      }
    });
  }

  ngOnDestroy(): void {
    this.sidenavSubscription.unsubscribe();
  }

}
