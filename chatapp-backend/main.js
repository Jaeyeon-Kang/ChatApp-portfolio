const {app, BrowserWindow} = require("electron");
const path = require("path");
const isDev = process.env.NODE_ENV === "development";

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

	const startURL = "http://localhost:5173";

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
