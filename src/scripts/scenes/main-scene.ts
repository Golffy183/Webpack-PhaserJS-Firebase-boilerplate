import '../styles/main-scene.css';

export default class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    const button = document.createElement('button')
    button.id = 'add';
    button.innerHTML = "Set";
    button.addEventListener('click', () => {
      document.dispatchEvent(new Event("submit"));
    })

    const input = document.createElement("input")
    input.id = "inputName";

    const getButton = document.createElement('button');
    getButton.id = 'get';
    getButton.innerHTML = 'Get';
    getButton.addEventListener('click', () => {
      document.dispatchEvent(new Event("getname"));
    })

    document.body.appendChild(button);
    document.body.appendChild(input);
    document.body.appendChild(getButton)
  }

  update(time: number, delta: number): void {}
}
