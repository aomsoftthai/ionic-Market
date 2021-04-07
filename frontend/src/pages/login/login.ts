import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CommonNg } from '../../providers/providers';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loading: boolean = false;
  myForm: FormGroup;
  sUserID: FormControl;
  sPassword: FormControl;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
    /* Validators Schema */
    this.sUserID = this.fb.control('', Validators.required);
    this.sPassword = this.fb.control('', Validators.required);

    this.myForm = this.fb.group({
      'sUserID': this.sUserID,
      'sPassword': this.sPassword
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onLogin() {
    const { value } = this.myForm;
    console.log(`onLogin`, value);
  }

}
