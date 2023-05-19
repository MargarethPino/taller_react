import  Constants  from "expo-constants";
import {initializaApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";



const firebaseConfig = {
    apiKey: Constants.manifest.extra.apiKey,
    authDomain: Constants.manifest.extra.authDomain,
    projectId: Constants.manifest.extra.projectId,
    storageBucket: Constants.manifest.extra.storageBucket,
    messagingSenderId: Constants.manifest.extra.messagingSenderId,
    appId: Constants.manifest.extra.appId,
    measurementId: Constants.manifest.extra.measurementId,
};


initializaApp(firebaseConfig);


export const baseDatos = getFirestore ();