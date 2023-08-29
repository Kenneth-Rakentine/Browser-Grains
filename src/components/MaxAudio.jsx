import React, {Component, createRef} from 'react';
import { createDevice } from '@rnbo/js';

function setup() {
    canvas = createCanvas(720, 720);
    noCursor();
  
    colorMode(HSB, 360, 100, 100);
  
    rectMode(CENTER);
  
    noStroke();
  
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  
    loadRNBO();
  
    canvas.mouseClicked(startAudioContext);
  }
  
  async function loadRNBO() {
    const { createDevice } = RNBO;
  
    await audioContext.resume();
  
    const rawPatcher = await fetch('patch.export.json');
    const patcher = await rawPatcher.json();
  
    device = await createDevice({ context: audioContext, patcher});
    device.node.connect(audioContext.destination);
  
    x = describe.parametersById.get('x')
  
  }
  
  

function MaxAudio() {
  return (
    <div>
        

    </div>
  )
}

export default MaxAudio