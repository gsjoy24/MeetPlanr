import { initializeApp } from "firebase/app";

const firebaseConfig = {
   apiKey: process.env.NEXT_PUBLIC_APIKEY,
   authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
   projectId: process.env.NEXT_PUBLIC_PROJECTID,
   storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
   messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
   appId: process.env.NEXT_PUBLIC_APPID,
};

// Only initialize Firebase if we have valid configuration
// This prevents build errors when environment variables are not set
let app;
try {
   if (firebaseConfig.apiKey && firebaseConfig.apiKey !== 'undefined') {
      app = initializeApp(firebaseConfig);
   } else {
      console.warn('Firebase config not found, using dummy app for build compatibility');
      app = null;
   }
} catch (error) {
   console.warn('Failed to initialize Firebase:', error.message);
   app = null;
}

export default app;
