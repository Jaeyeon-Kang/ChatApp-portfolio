const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require("is-dev");
const express = require("express");

// Express 서버 설정
const server = express();
const PORT = 4000;

// 기본 메시지 전송 라우트
server.get("/message", (req, res) => {
  res.send({ message: "서버에서 메시지 수신 성공!" });
});

// 서버 실행
server.listen(PORT, () => {
  console.log(`Express server is running on http://localhost:${PORT}`);
});

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      webSecurity: false,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  const startURL = isDev
    ? "http://localhost:3000"
    : "https://<your-koyeb-app-url>.koyeb.app";

  win.loadURL(startURL);
}

app.disableHardwareAcceleration();

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
