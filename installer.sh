#!/bin/bash

# Function to create directories and files
create_directories_and_files() {
  mkdir -p mern-project/public mern-project/src/{admin,components,contexts,pages,redux,theme,utils}
  
  # Create public/index.html
  cat <<EOL > mern-project/public/index.html
mern-project/public/index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MERN Project</title>
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self';">
</head>
<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>
</body>
</html>
EOL


  # Create src/index.js
  cat <<EOL > mern-project/src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css'; // Import your CSS

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
EOL

  # Create src/App.js
  cat <<EOL > mern-project/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Login from './pages/Login';
import AdminPanel from './admin/AdminPanel';

import { AuthProvider } from './contexts/AuthContext';
import { PermissionsProvider } from './contexts/PermissionsContext';
import { ShortcutsProvider } from './contexts/ShortcutsContext';
import { MessagesProvider } from './contexts/MessagesContext';
import { ProfilePreferencesProvider } from './contexts/ProfilePreferencesContext';

const App = () => {
  return (
    <AuthProvider>
      <PermissionsProvider>
        <ShortcutsProvider>
          <MessagesProvider>
            <ProfilePreferencesProvider>
              <Router>
                <Switch>
                  <Route path="/login" component={Login} />
                  <Route path="/admin" component={AdminPanel} />
                  <Route path="/profile" component={Profile} />
                  <Route path="/" component={Dashboard} />
                </Switch>
              </Router>
            </ProfilePreferencesProvider>
          </MessagesProvider>
        </ShortcutsProvider>
      </PermissionsProvider>
    </AuthProvider>
  );
};

export default App;
EOL

  # Create src/redux/store.js
  cat <<EOL > mern-project/src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import radioHeadsReducer from './radioHeadSlice';

const store = configureStore({
  reducer: {
    radioHeads: radioHeadsReducer,
  },
});

store.subscribe(() => {
  const { saveSettings } = require('./radioHeadSlice').default.actions;
  store.dispatch(saveSettings());
});

export default store;
EOL

  # Create src/redux/radioHeadSlice.js
  cat <<EOL > mern-project/src/redux/radioHeadSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('radioHeads')) || Array.from({ length: 40 }, (_, id) => ({
  id: id.toString(),
  incomingVolume: 50,
  outgoingVolume: 50,
  masterVolume: 50,
  isMuted: false,
}));

const radioHeadsSlice = createSlice({
  name: 'radioHeads',
  initialState,
  reducers: {
    setVolume: (state, action) => {
      const { id, type, value } = action.payload;
      const radioHead = state.find(head => head.id === id);
      if (radioHead) {
        radioHead[`${type}Volume`] = value;
      }
    },
    toggleMute: (state, action) => {
      const id = action.payload;
      const radioHead = state.find(head => head.id === id);
      if (radioHead) {
        radioHead.isMuted = !radioHead.isMuted;
      }
    },
    saveSettings: (state) => {
      localStorage.setItem('radioHeads', JSON.stringify(state));
    },
  },
});

export const { setVolume, toggleMute, saveSettings } = radioHeadsSlice.actions;

export default radioHeadsSlice.reducer;
  
EOL

  # Create package.json
cat <<EOL > mern-project/package.json{
  "name": "mern-project",
  "version": "1.0.0",
  "description": "MERN stack project",
  "main": "main.js",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "electron-start": "electron .",
    "electron-pack": "electron-builder"
  },
  "dependencies": {
    "@emotion/react": "^11.11.4",
    "@emotion/styled": "^11.11.5",
    "@mui/material": "^5.15.20",
    "@reduxjs/toolkit": "^1.6.0",
    "axios": "^1.7.2",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-grid-layout": "^1.4.4",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.0",

  },
  "devDependencies": {
    "electron": "^13.1.7",
    "electron-builder": "^22.11.7",
    "electron-is-dev": "^2.0.0"
  },
  "homepage": "./Login",
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

EOL

  # Create App.css
  cat <<EOL > mern-project/src/App.css
/* Add your CSS styling here */
body {
  font-family: Arial, sans-serif;
}
EOL

  # Create dummy component files
#  echo "import React from 'react';\n\nconst Dashboard = () => <div>Dashboard</div>;\n\nexport default Dashboard;" > mern-project/src/components/Dashboard.js
 # echo "import React from 'react';\n\nconst Profile = () => <div>Profile</div>;\n\nexport default Profile;" > mern-project/src/components/Profile.js
  #echo "import React from 'react';\n\nconst Login = () => <div>Login</div>;\n\nexport default Login;" > mern-project/src/pages/Login.js
 # echo "import React from 'react';\n\nconst AdminPanel = () => <div>AdminPanel</div>;\n\nexport default AdminPanel;" > mern-project/src/admin/AdminPanel.js

  # Create main.js for Electron
  cat <<EOL > mern-project/main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : \`file://\${path.join(__dirname, 'build/index.html')}\`
  );

  if (isDev) {
    win.webContents.openDevTools();
  }
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
EOL

  # Create preload.js for Electron
  cat <<EOL > mern-project/preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  send: (channel, data) => {
    let validChannels = ['toMain'];
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  receive: (channel, func) => {
    let validChannels = ['fromMain'];
    if (validChannels.includes(channel)) {
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
  }
});
EOL

  # Copy actual source code from your existing project (if applicable)
  # Replace /path/to/your/source with the actual path to your existing source code
  cp -r ./mern-project/src/* mern-project/src/
}

# Function to install dependencies, build, and run the project
setup_and_run() {
  cd mern-project

  # Install dependencies
  npm install
  echo "MUI Components"
  npm install @material-ui/core
  npm install @mui/material @emotion/react @emotion/styled
  # Build the React app
  npm run build

  # Serve the build locally (optional)
  npx serve -s build &

  # Start the Electron app
  npm run electron-start
}

# Execute the functions
create_directories_and_files
setup_and_run

