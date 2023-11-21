import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBDF3Vm2u1lMl2fPHtOxlHEOZGJNmTspXQ",
  authDomain: "niwatori-no-kimochi-b8be3.firebaseapp.com",
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://DATABASE_NAME.firebaseio.com",
  projectId: "niwatori-no-kimochi-b8be3",
  storageBucket: "niwatori-no-kimochi-b8be3.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
  measurementId: "G-MEASUREMENT_ID",
};
const app = initializeApp(firebaseConfig);
// Create a reference with an initial file path and name
const storage = getStorage();

export default defineNuxtPlugin(nuxtApp => {
  return {
    provide: {
      storage: storage
    }
  }
})
