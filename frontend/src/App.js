import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Registration1 from './components/Registration1';
import Registration2 from './components/Registration2';
import NotFound from './components/NotFound';
import Feed from './components/Feed';
import Course from './components/Course';
import { AuthProvider } from './contexts/AuthContext';
import Profile from './components/Profile';
import Investment from './components/Investment';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration1" element={<Registration1 />} />
            <Route path="/registration2" element={<Registration2 />} />
            <Route path='/feed' element={<Feed />} />
            <Route path='/course' element={<Course />} />
            <Route path='/investment' element={<Investment />} />
            <Route path='/profile' element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
