import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

import firebase from 'firebase';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  main1: string;
  main2: string;
  main3: string;
  main4: string;
  main5: string;
  main6: string;


  constructor(
    private router: Router,
    public toastController: ToastController
  ) { }

  async ngOnInit() {
    const db1 = firebase.firestore();

    const result1 = db1.collection("admin").doc("mainpage")
      .onSnapshot((doc) => {
        this.main1 = doc.data().text1
        this.main2 = doc.data().text2
      })
      console.log(result1)
  }

  async moveToChange() {
    const db2 = firebase.firestore();

    const washingtonRef = db2.collection("admin").doc("mainpage");

    const result = washingtonRef.update({
      text1: this.main1,
      text2: this.main2,
    });
    console.log(result)

    this.router.navigate(['home'])

    alert ("정상적으로 수정되었습니다.")
  }
}
