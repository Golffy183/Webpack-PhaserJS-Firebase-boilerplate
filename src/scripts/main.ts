import 'phaser';

import { GameConfig } from './config/config';
import { middlewareFirebaseInit } from './middleware/firebase/firebase';

window.addEventListener('load', () => {
  new Phaser.Game(new GameConfig().config);
  middlewareFirebaseInit();
});
