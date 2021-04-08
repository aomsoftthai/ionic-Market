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

    platformReady() { return this.platform.ready() }

    /*=====  ActionSheet Controller =====*/
    getActionSheet(title: string, button: ActionSheetButton[]): ActionSheet {
        let actionSheet = this.actionSheetCtrl.create({ title: title, buttons: button });
        return actionSheet;
    }

    createActionSheetButton(text: string, hander: any, role?: string, icon?: string, cssClass?: string): ActionSheetButton {
        let buttons: ActionSheetButton = {};
        buttons.text = text;
        buttons.handler = hander;

        if (!this.isEmpty(role)) buttons.role = role;
        if (!this.isEmpty(icon)) buttons.icon = icon;
        if (!this.isEmpty(cssClass)) buttons.cssClass = cssClass;

        return buttons;
    }

    /*=====  Alert Controller =====*/
    

    /*===== Utility Function  =====*/
    isEmpty(obj): boolean { return (obj || '') == ''; }

}