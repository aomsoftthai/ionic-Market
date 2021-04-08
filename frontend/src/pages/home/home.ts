import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/* Component */
import { AboutUsPage } from '../about-us/about-us';
import { ProductPage } from '../product/product';
import { FavoritePage } from '../favorite/favorite';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  chips: Array<{ item: number, title?: string, page: any }>;
  cards: Array<{ item: number, title?: string, content?: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chips = [
      { item: 1, title: "About Us", page: AboutUsPage },
      { item: 2, title: "Product", page: ProductPage },
      { item: 3, title: "Favorite", page: FavoritePage },
      { item: 4, title: "Profile", page: ProfilePage },
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
    !!item.page && this.navCtrl.push(item.page);
  }

}
