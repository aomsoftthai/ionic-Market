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
    getAlert(title: string, subTitle?: string, message?: string, buttons?: AlertButton[] | string, inputs?: AlertInputOptions[]): Alert {
        let alertOption: AlertOptions = {};
        alertOption.title = title;

        if (!this.isEmpty(subTitle)) alertOption.subTitle = subTitle;
        if (!this.isEmpty(message)) alertOption.message = message;
        if (typeof buttons == "object" && buttons.length > 0) alertOption.buttons = buttons;
        else if (typeof buttons == "string") alertOption.buttons = [buttons];
        else alertOption.buttons = ["Dismiss"];

        if (!this.isEmpty(inputs) && inputs.length > 0) alertOption.inputs = inputs;

        let alert = this.alertCtrl.create(alertOption);
        return alert;
    }

    createAlertButton(text: string, hander: any, role?: string, cssClass?: string): AlertButton {
        let alertButton: AlertButton = {};
        alertButton.text = text;
        alertButton.handler = hander;

        if (!this.isEmpty(role)) alertButton.role = role;
        if (!this.isEmpty(cssClass)) alertButton.cssClass = cssClass;

        return alertButton;
    }

    createAlertInputOptions(name: string, handler: any, placeholder?: string, type?: string): AlertInputOptions {
        let alertInputOptions: AlertInputOptions = {};
        alertInputOptions.name = name;
        alertInputOptions.handler = handler;

        if (!this.isEmpty(placeholder)) alertInputOptions.placeholder = placeholder;
        if (!this.isEmpty(type)) alertInputOptions.type = type;

        return alertInputOptions;
    }

    /*=====  Loading Controller =====*/

    /*===== Utility Function  =====*/
    isEmpty(obj): boolean { return (obj || '') == ''; }

}