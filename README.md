[4.0K]  .
├── [ 129]  ./.env
├── [   0]  ./README.md
├── [4.0K]  ./backend
│   ├── [ 110]  ./backend/.env
│   ├── [ 437]  ./backend/Dockerfile
│   ├── [ 374]  ./backend/Dockerfile.prod
│   ├── [4.0K]  ./backend/controllers
│   │   ├── [ 748]  ./backend/controllers/authController.js
│   │   ├── [ 573]  ./backend/controllers/radioHeadController.js
│   │   └── [1.6K]  ./backend/controllers/userController.js
│   ├── [ 174]  ./backend/development.Dockerfile
│   ├── [4.0K]  ./backend/middleware
│   │   ├── [1021]  ./backend/middleware/authMiddleware.js
│   │   ├── [ 221]  ./backend/middleware/corsMiddleware.js
│   │   ├── [ 173]  ./backend/middleware/errorHandler.js
│   │   └── [ 206]  ./backend/middleware/validateRequest.js
│   ├── [4.0K]  ./backend/models
│   │   ├── [ 670]  ./backend/models/RadioHead.js
│   │   └── [ 746]  ./backend/models/User.js
│   ├── [ 624]  ./backend/mongo-init.js
│   ├── [157K]  ./backend/package-lock.json
│   ├── [ 508]  ./backend/package.json
│   ├── [4.0K]  ./backend/routes
│   │   ├── [ 232]  ./backend/routes/authRoutes.js
│   │   ├── [ 429]  ./backend/routes/radioHeadRoutes.js
│   │   └── [ 392]  ./backend/routes/userRoutes.js
│   ├── [ 974]  ./backend/server.js
│   └── [4.0K]  ./backend/utils
│       ├── [   0]  ./backend/utils/connectDB.js
│       └── [ 231]  ./backend/utils/logger.js
├── [ 877]  ./docker-compose.dev.yml
├── [ 749]  ./docker-compose.prod.yml
├── [ 884]  ./docker-compose.yml
├── [4.0K]  ./frontend
│   ├── [ 129]  ./frontend/.babelrc
│   ├── [ 122]  ./frontend/Dockerfile
│   ├── [ 169]  ./frontend/Dockerfile.prod
│   ├── [ 121]  ./frontend/babel.config.json
│   ├── [ 170]  ./frontend/development.Dockerfile
│   ├── [ 391]  ./frontend/ngnx.conf
│   ├── [503K]  ./frontend/package-lock.json
│   ├── [ 963]  ./frontend/package.json
│   ├── [4.0K]  ./frontend/public
│   │   ├── [ 273]  ./frontend/public/index.html
│   │   └── [ 603]  ./frontend/public/styles.css
│   ├── [4.0K]  ./frontend/src
│   │   ├── [1.1K]  ./frontend/src/App.js
│   │   ├── [ 461]  ./frontend/src/Dockerfile
│   │   ├── [4.0K]  ./frontend/src/api
│   │   │   ├── [ 450]  ./frontend/src/api/api.js
│   │   │   └── [ 620]  ./frontend/src/api/axiosInstance.js
│   │   ├── [4.0K]  ./frontend/src/components
│   │   │   ├── [1.7K]  ./frontend/src/components/AudioPlayer.js
│   │   │   ├── [1.9K]  ./frontend/src/components/AudioSourceSelector.js
│   │   │   ├── [3.6K]  ./frontend/src/components/Dashboard.js
│   │   │   ├── [ 857]  ./frontend/src/components/DraggableWidget.js
│   │   │   ├── [ 687]  ./frontend/src/components/ErrorBoundary.js
│   │   │   ├── [1.1K]  ./frontend/src/components/Footer.js
│   │   │   ├── [2.1K]  ./frontend/src/components/Header.js
│   │   │   ├── [1.9K]  ./frontend/src/components/Profile.js
│   │   │   ├── [ 987]  ./frontend/src/components/Radiohead.css
│   │   │   ├── [1.9K]  ./frontend/src/components/Radiohead.js
│   │   │   ├── [ 416]  ./frontend/src/components/SecureRoute.js
│   │   │   ├── [ 598]  ./frontend/src/components/SettingsIcon.js
│   │   │   ├── [2.3K]  ./frontend/src/components/SettingsPanel.js
│   │   │   ├── [ 728]  ./frontend/src/components/Spinner.js
│   │   │   ├── [2.0K]  ./frontend/src/components/SplashScreen.js
│   │   │   └── [ 460]  ./frontend/src/components/Tray.js
│   │   ├── [4.0K]  ./frontend/src/contexts
│   │   │   ├── [1.1K]  ./frontend/src/contexts/AuthContext.js
│   │   │   ├── [ 526]  ./frontend/src/contexts/MessagesContext.js
│   │   │   ├── [ 604]  ./frontend/src/contexts/ProfilePreferencesContext.js
│   │   │   ├── [ 707]  ./frontend/src/contexts/ShortcutsContext.js
│   │   │   ├── [ 683]  ./frontend/src/contexts/SnackbarContext.js
│   │   │   └── [1.1K]  ./frontend/src/contexts/ThemeProvider.js
│   │   ├── [1.1K]  ./frontend/src/index.js
│   │   ├── [4.0K]  ./frontend/src/pages
│   │   │   ├── [2.3K]  ./frontend/src/pages/About.js
│   │   │   ├── [5.5K]  ./frontend/src/pages/Admin.js
│   │   │   ├── [ 334]  ./frontend/src/pages/Donate.js
│   │   │   ├── [1.9K]  ./frontend/src/pages/Login.js
│   │   │   └── [ 365]  ./frontend/src/pages/NotFound.js
│   │   ├── [4.0K]  ./frontend/src/redux
│   │   │   ├── [4.0K]  ./frontend/src/redux/actions
│   │   │   │   ├── [ 440]  ./frontend/src/redux/actions/authActions.js
│   │   │   │   └── [ 118]  ./frontend/src/redux/actions/types.js
│   │   │   ├── [4.0K]  ./frontend/src/redux/reducers
│   │   │   │   ├── [ 552]  ./frontend/src/redux/reducers/authReducer.js
│   │   │   │   └── [ 141]  ./frontend/src/redux/reducers/index.js
│   │   │   └── [ 384]  ./frontend/src/redux/store.js
│   │   ├── [1.1K]  ./frontend/src/styles.css
│   │   └── [4.0K]  ./frontend/src/utils
│   │       ├── [ 168]  ./frontend/src/utils/logger.js
│   │       └── [ 277]  ./frontend/src/utils/settings.js
│   └── [1.6K]  ./frontend/webpack.config.js
├── [4.0K]  ./mongo-init.js
└── [4.0K]  ./scripts
    └── [ 377]  ./scripts/refresh_docker.sh

19 directories, 79 files
