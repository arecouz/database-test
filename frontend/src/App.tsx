import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import SupaBaseMonarchs from './pages/SupaBaseMonarchs.tsx';
import Ryse from './pages/Ryse.tsx';
import LoggedIn from './pages/LoggedIn.tsx';
import PrivateRoute from './components/PrivateRoute.tsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/monarchs' element={<SupaBaseMonarchs />} />
        <Route path='/ryse' element={<Ryse />} />
        <Route
          path='/ryse/logged-in'
          element={
            <PrivateRoute>
              <LoggedIn />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
