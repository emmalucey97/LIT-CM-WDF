import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy{
  loginForm: FormGroup;
  subscription: Subscription;
  constructor(private authService:AngularFireAuth ,private router: Router) {}

  async onSubmit(form: NgForm) {
    const {email, password} = form.value;
    let resp;
    try{
      resp = await this.authService.signInWithEmailAndPassword(email, password);
      this.router.navigate(['/edit']);
    }
    catch (error){
      console.log(error.message);
    }
  }
  
    ngOnInit() {
       this.loginForm = new FormGroup({
         password: new FormControl(null, Validators.required)
       });
    }
    ngOnDestroy() {
        if(this.subscription) this.subscription.unsubscribe();
    }
}
