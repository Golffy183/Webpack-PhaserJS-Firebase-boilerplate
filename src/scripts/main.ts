import 'phaser';

import { GameConfig } from './config/config';
import { middlewareFirebaseInit } from './middleware/firebase/firebase';
import firestore from './middleware/firebase/firestore';

window.addEventListener('load', () => {
  new Phaser.Game(new GameConfig().config);
  middlewareFirebaseInit();
});

document.addEventListener("submit", firestore.setName);
document.addEventListener("getname", firestore.getName);
