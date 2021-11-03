import { Component, OnInit } from '@angular/core';

import firebase from 'firebase';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  constructor() { }

  async ngOnInit() {
    const db = firebase.firestore();
    
    db.collection("peace_makers").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      })
    })
  }

}
