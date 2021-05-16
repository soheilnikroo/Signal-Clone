import * as firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyA2AFjkxME9EeOlutoFkiI4fdqLd8YRFgs",
    authDomain: "signal-clone-5ec5e.firebaseapp.com",
    projectId: "signal-clone-5ec5e",
    storageBucket: "signal-clone-5ec5e.appspot.com",
    messagingSenderId: "536091541807",
    appId: "1:536091541807:web:b9539e0fd3df678cca61da"
};

let app;

if(firebase.apps.length===0){
    app = firebase.initializeApp(firebaseConfig);
}
 
else{
    app=firebase.app();
}

const db=app.firestore();
const auth=firebase.auth();

export {db,auth}
