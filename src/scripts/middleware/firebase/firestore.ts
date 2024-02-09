import { FirebaseApp } from 'firebase/app';
import {
  collection,
  doc,
  Firestore,
  getDocs,
  getFirestore,
  QuerySnapshot,
  setDoc,
} from 'firebase/firestore';

let firestore: Firestore;

export const FirestoreInit = (app: FirebaseApp) => {
  firestore = getFirestore(app);
};
