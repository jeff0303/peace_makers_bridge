import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.page.html',
  styleUrls: ['./campaign.page.scss'],
})
export class CampaignPage implements OnInit {

  campaign1: string;
  campaign2: string;
  campaign3: string;
  campaign4: string;
  campaign5: string;
  campaign6: string;

  constructor(
    private router: Router,
    public toastController: ToastController
  ) { }

  async ngOnInit() {
    const container1 = document.querySelector('.container1')
    const container2 = document.querySelector('.container2')
    const db = getFirestore();
    const docRef = doc(db, "admin", "campaign");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      // 유튜브 영상 링크 DB에서 불러와 영상 띄우기
      const video1 = docSnap.data().video1
      let template1 = video1
      container1.innerHTML = template1

      // 유튜브 영상 링크 DB에서 불러와 영상 띄우기
      const video2 = docSnap.data().video2
      let template2 = video2
      container2.innerHTML = template2

      // DB에서 글 가져오기
      this.campaign1 = docSnap.data().video1
      this.campaign2 = docSnap.data().video2
      this.campaign3 = docSnap.data().text1
      this.campaign4 = docSnap.data().text2
      this.campaign5 = docSnap.data().text3
      this.campaign6 = docSnap.data().text4
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  async moveToChange() {
    const db = getFirestore();
    const dbupdate = doc(db, "admin", "campaign")

    const result = await updateDoc(dbupdate, {
      video1: this.campaign1,
      video2: this.campaign2,
      text1: this.campaign3,
      text2: this.campaign4,
      text3: this.campaign5,
      text4: this.campaign6,
    });
    console.log(result)

    this.router.navigate(['home'])

    const toast = await this.toastController.create({
      message: '성공적으로 완료되었습니다!',
      duration: 2000
    });
    toast.present();

  }

}
