import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2u5MrHDqYyyFMiqfm8VkFsm9dQxF9sIg",
    authDomain: "b8a12-project.firebaseapp.com",
    projectId: "b8a12-project",
    storageBucket: "b8a12-project.appspot.com",
    messagingSenderId: "251049278867",
    appId: "1:251049278867:web:a14035caea524e075dfc66"
};

const app = initializeApp(firebaseConfig);

export { app }