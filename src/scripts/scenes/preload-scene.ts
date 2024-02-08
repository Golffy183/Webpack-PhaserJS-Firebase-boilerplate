export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
    // const imageResources = [{ key: '', src: '' }];

    // for (const imageResource of imageResources) {
    //   this.load.image(imageResource.key, imageResource.src);
    // }

    window.addEventListener('resize', () => this.resize());
    this.resize();
  }

  create() {
    this.scene.start('MainScene');
  }

  resize = () => {
    this.cameras.resize(window.innerWidth, window.innerHeight);
    this.game.scale.resize(window.innerWidth, window.innerHeight);
  };
}
