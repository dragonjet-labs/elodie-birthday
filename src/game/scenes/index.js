import Phaser from 'phaser';

import PartyScene from './party';

import ImgElodie from '../assets/images/elodie.png';
import ImgElodieEnna from '../assets/images/elodieenna.png';
import ImgCake from '../assets/images/cake.png';
import ImgBanner from '../assets/images/banner.png';
import ImgBalloonL from '../assets/images/balloon-l.png';
import ImgBalloonR from '../assets/images/balloon-r.png';
import ImgMessages from '../assets/images/messages.png';
import ImgRoom from '../assets/images/room.png';
import ImgTable from '../assets/images/table.png';
import ImgCouch from '../assets/images/couch.png';
import ImgRack from '../assets/images/rack.png';
import ImgRadio from '../assets/images/radio.png';
import ImgTv from '../assets/images/tv.png';
import ImgCarpet from '../assets/images/carpet.png';

import ImgAP01 from '../assets/images/ap01.png';
import ImgAP02 from '../assets/images/ap02.png';
import ImgAP03 from '../assets/images/ap03.png';
import ImgAP04 from '../assets/images/ap04.png';
import ImgAP05 from '../assets/images/ap05.png';
import ImgAP06 from '../assets/images/ap06.png';
import ImgAP07 from '../assets/images/ap07.png';
import ImgAP08 from '../assets/images/ap08.png';
import ImgAP09 from '../assets/images/ap09.png';
import ImgAP10 from '../assets/images/ap10.png';

import Cursor3 from '../assets/cursor/cursor3.png';

import confettiPng from '../assets/atlas/confetti.png';
import confettiJson from '../assets/atlas/confetti.json';

import audioCake from '../assets/audio/hover/cake.mp3';
import audioCofetti from '../assets/audio/hover/confetti.mp3';
import audioMessages from '../assets/audio/hover/messages.mp3';
import audioMural from '../assets/audio/hover/mural.mp3';

import audioBGM01 from '../assets/audio/bgm01.mp3';

class IndexScene extends Phaser.Scene {
  loadingText = null;

  preload() {
    // Google Fonts
    this.googleFonts.preload(this.load);

    // Loading text
    const { width, height } = this.sys.game.canvas;
    this.loadingText = this.add.text(width / 2, height / 2, 'Loading....', {
      fontSize: 20,
      color: '#ffffff',
      stroke: '#003366',
      strokeThickness: 5,
    }).setOrigin(0.5, 0.5);

    // Add scenes
    this.scene.add('party', PartyScene);

    // Preload assets
    this.load.image('elodie', ImgElodie);
    this.load.image('elodieenna', ImgElodieEnna);
    this.load.image('cake', ImgCake);
    this.load.image('banner', ImgBanner);
    this.load.image('balloon-l', ImgBalloonL);
    this.load.image('balloon-r', ImgBalloonR);
    this.load.image('messages', ImgMessages);
    this.load.image('room', ImgRoom);
    this.load.image('table', ImgTable);
    this.load.image('couch', ImgCouch);
    this.load.image('rack', ImgRack);
    this.load.image('radio', ImgRadio);
    this.load.image('tv', ImgTv);
    this.load.image('carpet', ImgCarpet);

    this.load.image('ap01', ImgAP01);
    this.load.image('ap02', ImgAP02);
    this.load.image('ap03', ImgAP03);
    this.load.image('ap04', ImgAP04);
    this.load.image('ap05', ImgAP05);
    this.load.image('ap06', ImgAP06);
    this.load.image('ap07', ImgAP07);
    this.load.image('ap08', ImgAP08);
    this.load.image('ap09', ImgAP09);
    this.load.image('ap10', ImgAP10);

    this.load.atlas('confetti', confettiPng, confettiJson);

    this.load.audio('cake', audioCake);
    this.load.audio('confetti', audioCofetti);
    this.load.audio('messages', audioMessages);
    this.load.audio('mural', audioMural);

    this.load.audio('bgm01', audioBGM01);
  }

  async create() {
    // Cursor
    this.input.setDefaultCursor(`url(${Cursor3}), auto`);

    // Wait for asyncs to finish
    await Promise.all([
      // Configure Google Fonts and let it load specific fonts
      this.googleFonts.configure(),
    ]);

    // Done all preloading
    this.loadingText.destroy();

    // Proceed to next scene
    this.scene.start('party');
  }
}

export default IndexScene;
