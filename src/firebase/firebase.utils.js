import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyAQppTpJGRKN9zcT5VEkvfa8LAK9ysY2Yg",
    authDomain: "ecom-6384f.firebaseapp.com",
    databaseURL: "https://ecom-6384f.firebaseio.com",
    projectId: "ecom-6384f",
    storageBucket: "ecom-6384f.appspot.com",
    messagingSenderId: "973899695507",
    appId: "1:973899695507:web:dbabf448a8ec595a20d466",
    measurementId: "G-ZNH8CYD98E"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('erreur dans la création du user : ',error);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters(
    {
        prompt: 'select_account'
    }
);
export const signInWithGoogle = () => {
    console.log('signIn With Popup');
    auth.signInWithPopup(provider);
}
export default firebase;
