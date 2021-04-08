import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
// import { CommonNg } from '../../providers/providers';
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  loading: boolean = false;
  myForm: FormGroup;
  sUserID: FormControl;
  sFirstName: FormControl;
  sLastName: FormControl;
  nAge: FormControl;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {

    /* Validators Schema */
    this.sUserID = this.fb.control('', Validators.required);
    this.sFirstName = this.fb.control('', Validators.required);
    this.sLastName = this.fb.control('', Validators.required);
    this.nAge = this.fb.control(0, Validators.required);

    this.myForm = this.fb.group({
      'sUserID': this.sUserID,
      'sFirstName': this.sFirstName,
      'sLastName': this.sLastName,
      'nAge': this.nAge,
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }


  onSuubmit() {
    console.log(`onSuubmit`);
  }

}
