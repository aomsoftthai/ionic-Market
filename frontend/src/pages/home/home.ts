import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  chips: string[];
  cards: Array<{ item: number, title?: string, content?: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chips = ["Electronic", "Chicken", "Food", "Smart-Phone", "National"];

    this.cards = [];
    for(let i = 1; i <= 10; i++) {
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
  }

}
