import { Injectable } from '@angular/core';
import {
    ActionSheetController, ActionSheet, ActionSheetButton,
    AlertController, Alert, AlertButton, AlertOptions,
    LoadingController, Loading, LoadingOptions,
    ToastController, Toast, ToastOptions,
    ModalController, Modal, 
    // ModalOptions,
    Platform
} from 'ionic-angular';
import { AlertInputOptions } from 'ionic-angular/components/alert/alert-options';

@Injectable()
export class CommonNg {
    isCordova: boolean = false;
    isiOS: boolean = false;
    isAndroid: boolean = false;


    constructor(private actionSheetCtrl: ActionSheetController, private alertCtrl: AlertController, private loadingCtrl: LoadingController, private modalCtrl: ModalController, private toastCtrl: ToastController, private platform: Platform) {
        this.isCordova = this.platform.is('cordova');
        this.isiOS = this.platform.is('ios');
        this.isAndroid = this.platform.is('android');
    }
}