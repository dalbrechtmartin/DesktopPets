/* global Phaser */
//import functionName from './yourScriptFolder/myFunction.js';

const gameConfig = {
    autoFocus: false,
    pixelArt: true,
    scale: {
      width: 800,
      height: 600,
      parent: 'parent',
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: {
      preload,
      create,
      update
    },
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 200 }
      }
    }
  };
  
  function preload() {
    this.load.image('egg-default', '../../assets/eggs/egg-default.png');
    this.load.image('bedroom-default', '../../assets/backgrounds/bedroom-default.png');
  }
  
  function create() {
    //Position
    var middleWidthAxis = 400; //Center x axis

    var middleHeightAxis = 300; //Center y axis
    var floorHeightAxis = 450; //Set object on the floor

    //Interface
    this.add.image(middleWidthAxis, middleHeightAxis, 'bedroom-default');

    //Pet
    sprite = this.add.image(middleWidthAxis, floorHeightAxis, 'egg-default');
    sprite.setScale(6);
  }
  
  function update() {
    
  }
  
  document.getElementById('version').innerText = `Phaser v${Phaser.VERSION}`
  
  new Phaser.Game(gameConfig);