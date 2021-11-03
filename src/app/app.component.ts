import { Component } from '@angular/core';

import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
}

const firebaseConfig = {
  apiKey: "AIzaSyA49tnwn4Y8ca7EY_7pO2mPAuVGH01l2gI",
  authDomain: "peace-makers-f2530.firebaseapp.com",
  projectId: "peace-makers-f2530",
  storageBucket: "peace-makers-f2530.appspot.com",
  messagingSenderId: "23931604864",
  appId: "1:23931604864:web:b5ba1cabcb74bf5f3d3b65",
  measurementId: "G-Y2G8ZG9H9M"
};

firebase.initializeApp(firebaseConfig);
