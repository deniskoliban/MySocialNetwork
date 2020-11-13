import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {SidenavService} from '../../services/services/sidenav.service';
import {Subscription} from 'rxjs';
import {MatSidenav} from '@angular/material/sidenav';
import {AuthService} from '../../services/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  sidenavSubscription: Subscription;
  sidebarBtnToggleColor: string = null;
  sidebar: any;

  constructor(private sidenavService: SidenavService, private authService: AuthService) { }

  ngOnInit(): void {
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
