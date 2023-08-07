// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBGSREdgcNoOF6mxEoZKE4YH7mrqZEZj4o',
	authDomain: 'meetplanr.firebaseapp.com',
	projectId: 'meetplanr',
	storageBucket: 'meetplanr.appspot.com',
	messagingSenderId: '630757789100',
	appId: '1:630757789100:web:333190bb96834d23e7fe09'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
