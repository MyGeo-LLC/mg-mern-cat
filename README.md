
├── Dockerfile
├── Dockerfile.electron
├── README.md
├── docker
│   ├── docker-compose.db.yml
│   ├── docker-compose.dev.yml
│   ├── docker-compose.override.yml
│   └── docker-compose.yml
├── installer.sh
├── main.js
├── package-lock.json
├── package.json
├── preload.js
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
│   ├── setup_and_build.ps1
│   ├── setup_and_build.sh
│   ├── start.sh
│   ├── update_docker_files.log
│   └── update_docker_files.sh
└── src
    ├── App.css
    ├── App.js
    ├── admin
    │   └── AdminPanel.js
    ├── api
    │   └── api.js
    ├── backend
    │   ├── middleware
    │   │   └── authMiddleware.js
    │   ├── models
    │   │   └── User.js
    │   ├── routes
    │   │   ├── authRoutes.js
    │   │   └── userRoutes.js
    │   └── server.js
    ├── components
    │   ├── Dashboard.js
    │   ├── Profile.js
    │   ├── RadioHead.js
    │   └── Widget.js
    ├── contexts
    │   ├── AuthContext.js
    │   ├── MessagesContext.js
    │   ├── PermissionsContext.js
    │   ├── ProfilePreferencesContext.js
    │   └── ShortcutsContext.js
    ├── index.js
    ├── pages
    │   └── Login.js
    ├── redux
    │   ├── radioHeadSlice.js
    │   ├── radioheadSlice.js
    │   ├── radioheads
    │   └── store.js
    ├── theme
    │   └── theme.js
    └── utils
        └── logger.js


        



MUST:

	Design:
	The application should be responsive and modular. Scopes COntext. Modularity portability, MObile and Desktop.
	Emrgency responders, doctors/hospitals/police/public saftety

	Security:
	Secure JWT Login
	password resets
	salt hash
	length requiremnts
	Implement secure login using JWT validation at middleware.
	Provide functionalities for authentication, password reset, and logout.
	Role-Based Access Control (RBAC)

	
	Interaction and usability:
	Shortcut Key Assignments
	Allow users to assign and manage shortcut keys for various actions.
	

	UI:
	responsive, interactive touch panel/Desktop keyboard shortkeys mouse.
	Dark Theme, LIght Theme, CHoose style palete as Tesla.
	Visual indicatiors clear and consistent. COmponets look and feel consistent.
	CLear indication of activity and confirmation of saving, editing, cancel.
	Audio recording player
	recording audio


		Real-Time Server SIP/RTP Bidirectional Communication
		 MUltiple simultasion login sessions
		Multiple component interactive display offering realtime updates messages,

		Audio recording
		Push to Talk Feature
		Mute Button
		Incominmg audio, outgoing audio, Master, and conmtrols (mute all, reorganize, fit to screen)

		User daminstration
		add,remove,edit roles


		Shortcuts Context: Manage shortcut keys.
		Messages (Snackbar) Context: Manage notifications and messages.

		Profile Preferences Context: Manage user profile preferences.
		
		radiohead Dashboard:
\			A component or container that is the centrail focal point of individual draggable multi selectable customizable resiazable and sortable/searchable radioheads.
			incoming audio visual indicator
			
		system health 
		JPS vs2 system
		hardware mamagement (role)


		Metrics, Performance, Tracability, Logging
		
		Radiohead Systems health settings, appearence settings, gemral config settings (recording filenemae, colors, size, font, resolution high contrast)

		General (all radiohead sytems health)

		Responsive Design:
		Mobile: Limited core features.
		Desktop: Draggable, resizable components.
		Features:




Admin, preferences, user management, and full features available based on role and plan.
Widgets and draggable components management.
Multiple select and single select functionalities for drag and focus.
Reorganization of components including sorting, resizing, and zoom in/out.
Filtering based on security, component detail, and view customization.
Customizable dashboard with widgets for addons and radiohead components.
Clear audio for radioheads, real-time status display, and snackbar messages display.
RadioHead.js

Component Features:
Sliders for incoming, outgoing, and master volume.
Color-coded, incoming audio indicator, push-to-talk button, and mute button.
Resizable, draggable, and configurable settings.
Settings include color coding, size, default configuration, volumes, and recording default filename.
Persistent settings both locally and to disk.
Manages media (audio playback, recording, and saving).
Profile.js

User Profile Management:
Preferences include default configuration, resolution, DPI, and dashboard layouts.
User information such as email, name, and ID.
Login

Authentication Features:
Secure login, JWT validation, authentication, password reset, and logout.
Admin Settings Panel

User Management:
Role management including user addition, modification, and deletion.
About/Help/Support

Pages:
About page, support and help user manual, donations, and contact information.
API page for metrics including Prometheus integration.
Logging

Logging Service:
Performance observability and profiling.
Metrics collection.
Documentation

API Documentation:
Spynyxk API documentation.
Requirements Tracing:
Trace software requirements to ensure compliance and best practices.
Non-Functional Requirements
Security

Ensure secure communication and data handling.
Maintain secure scopes using contexts between components.
Performance

Ensure high performance and responsiveness.
Implement performance observability and profiling tools.
Compliance

Follow industry best practices and standards.
Maintain a portable design that remains in compliance.
Technologies

Use Redux for state management.
Implement virtualization for efficient rendering.
Include advanced UI features and metrics.


start of my project:


tree:




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



















16 directories, 52 files