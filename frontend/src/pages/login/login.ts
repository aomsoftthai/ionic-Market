import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  
  loading: boolean = false;
  myForm: FormGroup;
  sUserID: FormControl;
  sPassword: FormControl;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
