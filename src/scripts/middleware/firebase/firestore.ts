import { FirebaseApp } from 'firebase/app';
import {
    collection,
    doc,
    DocumentSnapshot,
    Firestore,
    getDoc,
    getFirestore,
    QuerySnapshot,
    setDoc
} from 'firebase/firestore';
import helperResponse from '../helper/promise';

let firestore: Firestore;

export const FirestoreInit = (app: FirebaseApp) => {
    firestore = getFirestore(app);
}

const setName = () => {
    const name = "peeradech";
    const score = 10;

    const docRef = doc(firestore, 'users', name);
    setDoc(docRef, {
        score
    });
}

const getName = async () => {
    const name = (document.getElementById('inputName') as HTMLInputElement).value;
    
    const refCollection = collection(firestore, 'users');
    const refDoc = doc(refCollection, name)
    const resCollectionQuery = await helperResponse(getDoc(refDoc));

    const resCollection = (resCollectionQuery.res as DocumentSnapshot).data();

    console.log(resCollection);
}

export default {
    setName,
    getName
}