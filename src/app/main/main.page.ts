import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";

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
    const db = getFirestore();
    const docRef = doc(db, "admin", "mainpage");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      this.main1 = docSnap.data().text1
      this.main2 = docSnap.data().text2
      this.main3 = docSnap.data().text3
      this.main4 = docSnap.data().text4
      this.main5 = docSnap.data().text5
      this.main6 = docSnap.data().text6
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  async moveToChange() {
    const db = getFirestore();
    const dbupdate = doc(db, "admin", "mainpage")

    const result = await updateDoc(dbupdate, {
      text1: this.main1,
      text2: this.main2,
      text3: this.main3,
      text4: this.main4,
      text5: this.main5,
      text6: this.main6,
    });
    console.log(result)

    this.router.navigate(['home'])

    alert ("정상적으로 수정되었습니다.")
  }

}
