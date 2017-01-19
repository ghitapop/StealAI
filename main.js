/**
 * Created by popghit on 1/19/2017.
 */

'use strict'

const electron = require('electron');
const {app, BrowserWindow}  = electron;

app.on('ready', () => {
   let win = new BrowserWindow({width: 800, height: 600});
   win.loadURL('file://${__dirname}/index.html');
});