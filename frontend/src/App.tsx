import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Login } from '@/pages/Login';
import { Signup } from '@/pages/Signup';
import { Dashboard } from '@/pages/Dashboard';
import { MedicalRecords } from '@/pages/MedicalRecords';
import { Appointments } from '@/pages/Appointments';
import { Prescriptions } from '@/pages/Prescriptions';
import { Messages } from '@/pages/Messages';
import { Notifications } from '@/pages/Notifications';

export function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/medical-records" element={<MedicalRecords />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/prescriptions" element={<Prescriptions />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </Router>
  );
}
