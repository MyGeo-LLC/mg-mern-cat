my-new-project/
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── radioHeadController.js
│   │   └── userController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── errorHandler.js
│   ├── models/
│   │   ├── RadioHead.js
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── radioHeadRoutes.js
│   │   └── userRoutes.js
│   ├── utils/
│   │   ├── connectDB.js
│   │   └── logger.js
│   ├── .env
│   ├── Dockerfile
│   ├── mongo-init.js
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── api/
│   │   │   ├── axiosInstance.js
│   │   │   └── api.js
│   │   ├── components/
│   │   │   ├── AudioPlayer.js
│   │   │   ├── AudioSourceSelector.js
│   │   │   ├── Dashboard.js
│   │   │   ├── DraggableWidget.js
│   │   │   ├── ErrorBoundary.js
│   │   │   ├── Footer.js
│   │   │   ├── Header.js
│   │   │   ├── Radiohead.js
│   │   │   ├── RadioheadDetails.js
│   │   │   ├── SecureRoute.js
│   │   │   ├── SettingsIcon.js
│   │   │   ├── SettingsPanel.js
│   │   │   ├── SplashScreen.js
│   │   │   └── Tray.js
│   │   ├── contexts/
│   │   │   ├── AuthContext.js
│   │   │   ├── MessagesContext.js
│   │   │   ├── PermissionsContext.js
│   │   │   ├── ProfilePreferencesContext.js
│   │   │   ├── ShortcutsContext.js
│   │   │   └── SnackbarContext.js
│   │   ├── pages/
│   │   │   ├── About.js
│   │   │   ├── AdminPanel.js
│   │   │   ├── Donate.js
│   │   │   ├── Login.js
│   │   │   └── NotFound.js
│   │   ├── redux/
│   │   │   ├── actions/
│   │   │   │   ├── authActions.js
│   │   │   │   └── types.js
│   │   │   ├── reducers/
│   │   │   │   ├── authReducer.js
│   │   │   │   └── index.js
│   │   │   ├── radioHeadSlice.js
│   │   │   └── store.js
│   │   ├── styles/
│   │   │   ├── theme.js
│   │   │   └── styles.css
│   │   ├── utils/
│   │   │   ├── logger.js
│   │   │   └── settings.js
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── package.json
│   │   ├── webpack.config.js
│   │   └── babel.config.js
├── docker-compose.yml
└── README.md

.
├── Dockerfile
├── README.md
├── babel.config.js
├── backend
│   ├── Dockerfile
│   ├── Dockerfile.prod
│   ├── addTestUser.js
│   ├── controllers
│   │   ├── authController.js
│   │   ├── radioHeadController.js
│   │   ├── radioheadController.js
│   │   └── userController.js
│   ├── development.Dockerfile
│   ├── middleware
│   │   ├── authMiddleware.js
│   │   ├── corsMiddleware.js
│   │   ├── errorHandler.js
│   │   └── validateRequest.js
│   ├── models
│   │   ├── RadioHead.js
│   │   └── User.js
│   ├── mongo-init.js
│   ├── package-lock.json
│   ├── package.json
│   ├── populate_db.js
│   ├── routes
│   │   ├── authRoutes.js
│   │   ├── radioHeadRoutes.js
│   │   ├── radioheadRoutes.js
│   │   └── userRoutes.js
│   ├── server.js
│   └── utils
│       ├── connectDB.js
│       └── logger.js
├── docker
│   ├── docker-compose.db.yml
│   ├── docker-compose.dev.yml
│   ├── docker-compose.override.yml
│   └── docker-compose.yml
├── docker-compose.dev.yml
├── docker-compose.prod.yml
├── docker-compose.yml
├── frontend
│   ├── Dockerfile
│   ├── Dockerfile.prod
│   ├── babel.config.json
│   ├── development.Dockerfile
│   ├── ngnx.conf
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   ├── index.html
│   │   └── styles.css
│   ├── src
│   │   ├── App.js
│   │   ├── Dockerfile
│   │   ├── api
│   │   │   ├── api.js
│   │   │   └── axiosInstance.js
│   │   ├── components
│   │   │   ├── AudioPlayer.js
│   │   │   ├── AudioSourceSelector.js
│   │   │   ├── Dashboard.js
│   │   │   ├── DraggableWidget.js
│   │   │   ├── ErrorBoundary.js
│   │   │   ├── Footer.js
│   │   │   ├── Header.js
│   │   │   ├── Profile.js
│   │   │   ├── Radiohead.css
│   │   │   ├── Radiohead.js
│   │   │   ├── SecureRoute.js
│   │   │   ├── SettingsIcon.js
│   │   │   ├── SettingsPanel.js
│   │   │   ├── Spinner.js
│   │   │   ├── SplashScreen.js
│   │   │   └── Tray.js
│   │   ├── contexts
│   │   │   ├── AuthContext.js
│   │   │   ├── MessagesContext.js
│   │   │   ├── ProfilePreferencesContext.js
│   │   │   ├── ShortcutsContext.js
│   │   │   ├── SnackbarContext.js
│   │   │   └── ThemeProvider.js
│   │   ├── index.js
│   │   ├── pages
│   │   │   ├── About.js
│   │   │   ├── Admin.js
│   │   │   ├── Donate.js
│   │   │   ├── Login.js
│   │   │   └── NotFound.js
│   │   ├── redux
│   │   │   ├── actions
│   │   │   │   ├── authActions.js
│   │   │   │   └── types.js
│   │   │   ├── reducers
│   │   │   │   ├── authReducer.js
│   │   │   │   └── index.js
│   │   │   └── store.js
│   │   ├── styles.css
│   │   └── utils
│   │       ├── logger.js
│   │       └── settings.js
│   └── webpack.config.js
├── mongo-init.js
├── package-lock.json
├── package.json
├── public
│   └── index.html
├── scripts
│   ├── Dockerfile
│   ├── Dockerfile.electron
│   ├── build_and_package.ps1
│   ├── build_and_package.sh
│   ├── docker-compose.db.yml
│   ├── docker-compose.dev.yml
│   ├── docker-compose.override.yml
│   ├── docker-compose.yml
│   ├── installer.sh
│   ├── main.js
│   ├── preload.js
│   ├── refresh_docker.sh
│   ├── setup_and_build.ps1
│   ├── setup_and_build.sh
│   ├── start.sh
│   ├── update_docker_files.log
│   └── update_docker_files.sh
└── webpack.config.js

20 directories, 107 files
Way more to come.Issues needed attention: dev,prod setup.
