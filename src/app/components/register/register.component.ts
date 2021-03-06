import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/services/auth.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';
import {signup} from '../auth/store/authActions';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  registerFormControls = {
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  };

  constructor(private fb: FormBuilder, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group(this.registerFormControls);
  }

  onSubmit(): void {
    this.store.dispatch(signup(this.registerForm.value));
  }

}
