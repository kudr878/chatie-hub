import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Chats from './pages/Chats';
import MainPage from './pages/MainPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} >
        <Route index element={<MainPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="chats" element={<Chats />} />
      </Route>
    </Routes>

  );
}
