import { Component, OnInit } from '@angular/core';

import { getFirestore,collection, getDocs } from "firebase/firestore";

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  constructor() { }

  async ngOnInit() {
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, "peace_makers"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
    console.log(querySnapshot)
  }

}
