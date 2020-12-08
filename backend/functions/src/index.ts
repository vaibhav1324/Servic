import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import firebase from "firebase";
import expressServer from "./api/expressServer";
import "reflect-metadata";

const serviceAccount = require("../privateKeys/servic_keys.json");

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "servic-v2.firebaseapp.com",
  projectId: "servic-v2",
  storageBucket: "servic-v2.appspot.com",
  messagingSenderId: "92052121863",
  appId: "1:92052121863:web:b54a9194134b5ed87c7da2",
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: firebaseConfig.storageBucket,
});

firebase.initializeApp(firebaseConfig);

export const webApi = functions.https.onRequest(
  expressServer({
    firebaseAdmin: admin,
    firebase: firebase,
  })
);
