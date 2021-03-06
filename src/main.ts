/// <reference path="../def/github-electron/github-electron-main" />
/// <reference path="../def/github-electron/github-electron" />

import app           = require("app");            // Module to control application life.
import BrowserWindow = require("browser-window"); // Module to create native browser window.

// Report crashes to our server.
import CrashReporter = require("crash-reporter");
CrashReporter.start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is GCed.
var mainWindow : GitHubElectron.BrowserWindow;

// Quit when all windows are closed.
app.on("window-all-closed", () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform != "darwin") {
        app.quit();
    }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on("ready", () => {

    // Create the browser window.
    mainWindow = new BrowserWindow({ width: 800, heighter: 600 });

    // and load the index.html of the app.
    mainWindow.loadUrl("file://" + __dirname + "/../static/index.html");

    // Open the devtools.
    mainWindow.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on("closed", () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
});
