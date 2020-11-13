import {Component, OnInit, ViewChild} from '@angular/core';
import {SidenavService} from '../../services/services/sidenav.service';
import {Observable} from 'rxjs';
import {MatSidenav} from '@angular/material/sidenav';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth-content',
  templateUrl: './auth.content.component.html',
  styleUrls: ['./auth.content.component.css']
})
export class AuthContentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/auth']);
  }

}
