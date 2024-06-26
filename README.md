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

