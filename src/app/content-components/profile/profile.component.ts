import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserData} from '../../components/auth/store/authReducer';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';
import {AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('file', {static: true}) file: ElementRef;
  @ViewChild('avatar', {static: true}) avatar: ElementRef;
  userData: UserData;

  constructor(private store: Store<AppState>, private storage: AngularFireStorage) { }

  ngOnInit(): void {
    this.store.select('auth').subscribe(
      (state) => {
        this.userData = state.userData;
      }
    );
  }

  upload(): void {
    const ref =  this.storage.storage.ref();
    const img = this.file.nativeElement.files[0];
    const name = img.name;
    const metadata = {
      contentType: img.type
    };
    const task = ref.child(name).put(img, metadata);

    task.then(
      snapshot => snapshot.ref.getDownloadURL()
    ).then(ur => this.avatar.nativeElement.style.backgroundImage = `url(${ur})`);
  }

  chooseFile(): void {
    this.file.nativeElement.click();
  }

}
