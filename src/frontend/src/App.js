import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './pages/admin/AdminDashboard';
import UserDashboard from './pages/user/UserDashboard';
import ActivityLog from './pages/ActivityLog';
import { isAdmin, isLoggedIn } from './utils/auth';
import SideMenu from './components/SideMenu'; 
import AppNavbar from './components/AppNavbar'; 
import Box from '@mui/material/Box';

function App() {
  return (
    <Router>
      {isLoggedIn() ? (
        <Box sx={{ display: 'flex' }}>
          <SideMenu />
          <Box sx={{ flexGrow: 1 }}>
            <AppNavbar />
            <Routes>
              {isAdmin() ? (
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
              ) : (
                <Route path="/user/dashboard" element={<UserDashboard />} />
              )}
              <Route path="/" element={<Navigate to={isAdmin() ? '/admin/dashboard' : '/user/dashboard'} />} />
              <Route path="*" element={<Navigate to={isAdmin() ? '/admin/dashboard' : '/user/dashboard'} />} />

              <Route path="/activityLog" element={<ActivityLog />} />
              <Route path="*" element={<Navigate to="/activityLog" />} />
            </Routes>
          </Box>
        </Box>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
