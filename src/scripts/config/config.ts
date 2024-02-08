/* eslint-disable @typescript-eslint/naming-convention */
import Phaser from 'phaser';

import MainScene from '../scenes/main-scene';
import PreloadScene from '../scenes/preload-scene';

const DefaultWidth = 1280;
const DefaultHeight = 720;

export class GameConfig {
  config = {
    type: Phaser.AUTO,
    backgroundColor: '#FFFFF0',
    scale: {
      parent: 'phaser-game',
      mode: Phaser.Scale.CENTER_BOTH,
    },
    physics: {
      default: 'arcade',
      arcade: {
        debug: true,
        gravity: { y: 10 },
      },
    },
    scene: [PreloadScene, MainScene],
  };
}
