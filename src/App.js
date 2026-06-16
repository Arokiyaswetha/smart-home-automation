import { Routes, Route } from 'react-router-dom';
import Dashboard from '../src/Component/Dashboard';
import DeviceControl from '../src/Component/DeviceControl';
import Logs from '../src/Component/Logs';
import Layout from './Component/Layout';
import './css/dashboard.css';
import ProfileSettings from './Component/Profile';
import Surveillance from './Component/Surveillance';
import EnergyOverview from './Component/EnergyOverview';
import Automation from './Component/Automation';
import Notifications from './Component/Notification';
import Summary from './Component/Summary';
import RoomManagement from './Component/Room management';
import AdjustDevices from './Component/AdjustDevice';
import Scenerio from './Component/Scenerio';
import AddRoom from './Component/AddRoom';
import AddDevice from './Component/AddDevice';
import DeviceUsage from './Component/DeviceUsage';
import Rule from './Component/Rule';
import DeviceSchedules from './Component/DeviceSchedules';
import Signout from './Component/Signout';
import HomePage from './Component/Home';
import SignIn from './Component/SignIn';
import SignUp from './Component/Signup';
import ForgotPassword from './Component/Forgot';
import VerifyMFA from './Component/MFA';
import SupportPage from './Component/Contact';
import EmailSupport from './Component/Email';
import FAQ from './Component/Faq';
// ...add other pages here

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/device-control" element={<DeviceControl />} />
      <Route path="/device-control/adjust" element={<AdjustDevices />} />
      <Route path="/logs" element={<Logs />} />
      <Route path="/settings" element={<ProfileSettings />} />
      <Route path="/surveillance" element={<Surveillance/>} />
      <Route path="/energy" element={<EnergyOverview />} />
      <Route path="/automation" element={<Automation />} />
      <Route path="/notification" element={<Notifications />} />
      <Route path="/summary" element={<Summary />} />
      <Route path="/room" element={<RoomManagement />} />
      <Route path="/scenerio" element={<Scenerio />} />
      <Route path="/room-management/add" element={<AddRoom />} />
      <Route path="/add-device" element={<AddDevice />} />
      <Route path="/energy/device-usage" element={<DeviceUsage />} />
      <Route path="/create-rule" element={<Rule />} />
      <Route path="/device-schedules" element={<DeviceSchedules />} />
      <Route path="/signout" element={<Signout />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-mfa" element={<VerifyMFA />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/email-support" element={<EmailSupport />} />
      <Route path="/faq-support" element={<FAQ />} />
      {/* Add more routes like /automation, /notification etc. */}
      </Route>
    </Routes>
   
  );
}
