import {Component, ElementRef, OnInit} from '@angular/core';
import {SidenavService} from '../../services/sidenav.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sidenavSubscription: Subscription;

  constructor(private sidenavService: SidenavService) { }

  ngOnInit(): void {
  }

  toggleSidebar(): void {
    this.sidenavSubscription = this.sidenavService.sidenavToggle.subscribe((sidebar) => {
      sidebar.toggle();
    });
    this.sidenavSubscription.unsubscribe();
  }

}
