import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
}

const firebaseConfig = {
  apiKey: "AIzaSyDDDT_M70gUkpq7ubOcChoePbU1cy_G5XQ",
  authDomain: "ngo-platform-9cbdb.firebaseapp.com",
  projectId: "ngo-platform-9cbdb",
  storageBucket: "ngo-platform-9cbdb.appspot.com",
  messagingSenderId: "1032461306472",
  appId: "1:1032461306472:web:5c2909e12adf1beac409dd",
  measurementId: "G-1Q8E5LDVVW"
};

const app = initializeApp(firebaseConfig);
