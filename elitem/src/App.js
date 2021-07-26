import React from 'react';
import Landing from './landing/Landing.js';
import Portal from './portal/Portal.js';
import Recovery from './portal/recovery/Recovery.js';
import Admin from './admin/Admin.js';
import Dashboard from './portal/dashboard/Dashboard.js';
import TermsOfService from './legal/TermsOfService.js';
import PrivacyPolicy from './legal/PrivacyPolicy.js';
import PrivateRoute from './routes/PrivateRoute.js';
import { AuthProvider } from './contexts/AuthContext';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
        </style>
        <Router>
          <AuthProvider>
            <Switch>
              {/* Dashboard */}
              <PrivateRoute path='/user-portal' component={Dashboard}/>
              {/* Temproary Admin Portal */}
              <PrivateRoute path='/admin-portal' component={Admin}/>
              {/* Password Recovery */}
              <Route path='/password-recovery' component={Recovery}/>
              {/* Portal */}
              <Route path='/portal' component={Portal} />
              {/* Privacy Policy */}
              <Route path='/privacy-policy' component={PrivacyPolicy} />
              {/* Terms of Service */}
              <Route path='/terms-of-service' component={TermsOfService} />
              {/* Landing */}
              <Route path='/' component={Landing} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
  );
}

export default App;
