/**
 * Created by popghit on 1/19/2017.
 */

'use strict'

const electron = require('electron');
const {app, BrowserWindow, ipcMain: ipc}  = electron;

const countdown = require('./ui_container/countdown/countdown');

app.on('ready', () => {
   let window = new BrowserWindow({
       width: 800,
       height: 600
   });
   window.loadURL('file://' + __dirname + '/index.html');
   //open the dev tool
   //window.openDevTools();
   //disable default menubar
   window.setMenu(null);

   window.on('close', () => {
       window = null;
   });

    ipc.on('countdown-start', () => {
        countdown(count => {
            window.webContents.send('countdown', count);
        });
    });
});

