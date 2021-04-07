import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AboutUsPage } from '../about-us/about-us';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  chips: Array<{ item: number, title?: string, page: any }>;
  cards: Array<{ item: number, title?: string, content?: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chips = [
      { item: 1, title: "About Us", page: AboutUsPage }
    ];

    this.cards = [];
    for (let i = 1; i <= 10; i++) {
      this.cards.push({
        item: i,
        title: "Title " + i,
        content: "Content " + i
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  onClickChip(item) {
    console.log(`onClickChip`, item);

    !!item.page && this.navCtrl.push(item.page);
  }

}
