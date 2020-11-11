import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {SidenavService} from '../../services/sidenav.service';
import {Subscription} from 'rxjs';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  sidenavSubscription: Subscription;
  sidebarBtnToggleColor: string = null;
  sidebar: any;

  constructor(private sidenavService: SidenavService) { }

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
