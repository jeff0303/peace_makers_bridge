import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

import firebase from 'firebase';
import { fileURLToPath } from 'url';

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

  image: File; 

  Q1: string;
  Q2: string;
  Q3: string;

  A1: string;
  A2: string;
  A3: string;


  constructor(
    private router: Router,
    public toastController: ToastController
  ) { }

  async ngOnInit() {
    const container1 = document.querySelector('.container1')
    const container2 = document.querySelector('.container2')
    const db1 = firebase.firestore();
    const docRef = db1.collection('admin').doc('campaign')
      .onSnapshot((doc) => {
        // 유튜브 영상 링크 DB에서 불러와 영상 띄우기
        const video1 = doc.data().video1
        let template1 = video1
        container1.innerHTML = template1

        // 유튜브 영상 링크 DB에서 불러와 영상 띄우기
        const video2 = doc.data().video2
        let template2 = video2
        container2.innerHTML = template2
        
        // DB에서 글 가져오기
        this.campaign1 = doc.data().video1
        this.campaign2 = doc.data().video2
        this.campaign3 = doc.data().campaign1
        this.campaign4 = doc.data().campaigntext1
        this.campaign5 = doc.data().campaign2
        this.campaign6 = doc.data().campaigntext2

        this.Q1 = doc.data().Q1text;
        this.A1 = doc.data().A1text;
        this.Q2 = doc.data().Q2text;
        this.A2 = doc.data().A2text;
        this.Q3 = doc.data().Q3text;
        this.A3 = doc.data().A3text;
      })
  }

  async moveToChange() {
    //--------------------------------------------------------------//

    const db2 = firebase.firestore();

    const washingtonRef = db2.collection("admin").doc("campaign");

    const result = washingtonRef.update({
        video1: this.campaign1,
        video2: this.campaign2,
        campaign1: this.campaign3,
        campaigntext1: this.campaign4,
        campaign2: this.campaign5,
        campaigntext2: this.campaign6,
        Q1text: this.Q1,
        A1text: this.A1,
        Q2text: this.Q2,
        A2text: this.A2,
        Q3text: this.Q3,
        A3text: this.A3,
      });
    
    console.log(result)

    //--------------------------------------------------------------//

    const storage = firebase.storage();
    const storageRef = storage.ref();
    const ref = storageRef.child('image/' + this.image);
    const file = this.image
    const aaa = ref.put(file)



    this.router.navigate(['home'])

    alert("정상적으로 수정되었습니다.")

  }
}
