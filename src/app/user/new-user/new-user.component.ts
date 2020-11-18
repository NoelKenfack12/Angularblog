import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { User } from '../../models/User.model';

import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})

export class NewUserComponent implements OnInit {

  userForm: FormGroup;
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
     this.initForm();
  }

  //CONTRUCTION DU TEMPLATE
  //Méthode Réactive
  initForm() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmitForm() {
     const formValue = this.userForm.value;
     const newUser = new User(
       formValue['firstName'],
       formValue['lastName'],
       formValue['email'],
       formValue['tel'],
       formValue['password']
     );
     this.userService.addUser(newUser);
     this.router.navigate(['/users']);
   }


   //Méthode templateUrl
   onSubmit(): void {
     this.authService.register(this.form).subscribe(
       data => {
         console.log(data);
         this.isSuccessful = true;
         this.isSignUpFailed = false;
       },
       err => {
         this.errorMessage = err.error.message;
         this.isSignUpFailed = true;
       }
     );
   }

}
