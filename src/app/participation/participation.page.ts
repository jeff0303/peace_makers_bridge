import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

import firebase from 'firebase';

@Component({
  selector: 'app-participation',
  templateUrl: './participation.page.html',
  styleUrls: ['./participation.page.scss'],
})
export class ParticipationPage implements OnInit {
  participation1: string;
  participation2: string;
  participation3: string;

  constructor(
    private router: Router,
    public toastController: ToastController
  ) { }

  async ngOnInit() {
    const container1 = document.querySelector('.container1')
    const container2 = document.querySelector('.container2')
    const container3 = document.querySelector('.container3')
    
    const db1 = firebase.firestore();

    db1.collection("admin").doc("participation")
    .onSnapshot((doc) => {
      const video1 = doc.data().video1
      let template1 = video1
      container1.innerHTML = template1

      // 유튜브 영상 링크 DB에서 불러와 영상 띄우기
      const video2 =doc.data().video2
      let template2 = video2
      container2.innerHTML = template2

      // 유튜브 영상 링크 DB에서 불러와 영상 띄우기
      const video3 = doc.data().video3
      let template3 = video3
      container3.innerHTML = template3

      // DB에서 글 가져오기
      this.participation1 = doc.data().video1
      this.participation2 = doc.data().video2
      this.participation3 = doc.data().video3
    });
  }

  async moveToChange() {
    const db2 = firebase.firestore();
    const washingtonRef = db2.collection("admin").doc("participation");

    const result = washingtonRef.update({
        video1: this.participation1,
        video2: this.participation2,
        video3: this.participation3,
      });
      console.log(result)

      this.router.navigate(['home'])

      alert("정상적으로 수정되었습니다.")
  }
}
