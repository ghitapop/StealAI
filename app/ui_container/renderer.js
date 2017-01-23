/**
 * Created by popghit on 1/20/2017.
 */
"use strict";
const electron = require('electron');

const {ipcRenderer}  = electron;

document.getElementById('start').addEventListener('click', () => {
    ipcRenderer.send('countdown-start');
});

ipcRenderer.on('countdown', (evt, count) => {
   document.getElementById('count').innerHTML = count;
});