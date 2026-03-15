import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

// Public Pages
import Home from './pages/Home';
import Search from './pages/Search';
import Results from './pages/Results';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import Transport from './pages/admin/Transport';
import AddTransport from './pages/admin/AddTransport';
import AdminRoutes from './pages/admin/Routes';

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Public Routes with MainLayout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="results" element={<Results />} />
        </Route>

        {/* Admin Routes with AdminLayout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="transport" element={<Transport />} />
          <Route path="add-transport" element={<AddTransport />} />
          <Route path="routes" element={<AdminRoutes />} />
        </Route>

        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
