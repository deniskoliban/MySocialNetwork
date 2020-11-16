import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {SidenavService} from '../../services/services/sidenav.service';
import {UserService} from '../../services/services/user.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';
import {HttpClient} from '@angular/common/http';
import {map, take} from 'rxjs/operators';

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
    private store: Store<AppState>,
    private userService: UserService,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
    this.store.select('auth').pipe(take(1)).subscribe((state) => {
        if (state.user) {
          this.http.get(
            `https://mysocialnetwork-ee2a9.firebaseio.com/users.json`
          ).pipe(
            map( (response) => {
              return response[state.user.localId];
            })
          ).subscribe(
            (responce) => {
              this.userData = responce;
              console.log(responce);
            }, error => {
              console.log(error);
            }
          );
        }
    });
  }

  ngAfterViewInit(): void {
    this.sidenavService.sidenav.next(this.sidenav);
  }


}
