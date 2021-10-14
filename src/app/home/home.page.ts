import { Component } from '@angular/core';
import { Router } from '@angular/router';

// 2. 아임포트 코르도바 플러그인 임포트
import { IamportCordova } from '@ionic-native/iamport-cordova';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
  ) {}

  async ngOnInit() {}

  async moveTomain() {
    this.router.navigate(['main'])
  }

  async moveToCampaign() {
    this.router.navigate(['campaign'])
  }

  async moveToParticipation() {
    this.router.navigate(['participation'])
  }

  // async moveToUser() {
  //   this.router.navigate(['user'])
  // }
  
}
