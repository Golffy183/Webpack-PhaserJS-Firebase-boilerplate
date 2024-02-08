import 'phaser';

import { GameConfig } from './config/config';

window.addEventListener('load', () => {
  new Phaser.Game(new GameConfig().config);
});
