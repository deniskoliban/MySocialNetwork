import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserData} from '../../components/auth/store/authReducer';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';
import {AngularFireStorage} from '@angular/fire/storage';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {logout} from '../../components/auth/store/authActions';
import {putProfile} from './store/profile.actions';
import {Profile} from './store/profile.reducer';

export interface ProfileListItem {
  innerText: string;
  name: string;
  isEdit: boolean;
}


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('file', {static: true}) file: ElementRef;
  @ViewChild('avatar', {static: true}) avatar: ElementRef;
  userData: UserData;
  profileForm: FormGroup;
  profileFormControls = {};
  profileListNames = ['age', 'country', 'city', 'gender', 'hobbies', 'about'];
  profileList: ProfileListItem[] = [];

  constructor(private store: Store<AppState>, private storage: AngularFireStorage, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.subscribeToUserData();
    this.initProfileList();
    this.initProfileForm();
    this.profileForm = this.fb.group(this.profileFormControls);
  }

  editProfileListItem(index, event): void {
    event.stopPropagation();
    this.profileList[index].isEdit = false;
    this.profileList[index].innerText = this.profileForm.value[this.profileList[index].name];
  }

  startEditProfileListItem(index): void {
    this.profileList[index].isEdit = true;
  }

  onSubmit(): void{
    this.store.dispatch(putProfile({profile: {...this.profileForm.value as Profile}}));
  }

  initProfileList(): void {
    let profile;
    this.store.select('profile')
      .subscribe((state) => {
        profile = state.profile;
      });

    this.profileListNames.map(
      (el) => {
        this.profileList
          .push(
            {
              innerText: profile[el],
              name: el,
              isEdit: false
            }
          );
      }
    );
  }

  initProfileForm(): void {
    this.profileList.map(
      (el) => {
        this.profileFormControls[el.name] = new FormControl(null);
      }
    );
    console.log(this.profileFormControls);
  }

  subscribeToUserData(): void {
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
