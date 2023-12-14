import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.scss';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Registration1 from './components/Registration1';
import Registration2 from './components/Registration2';
import NotFound from './components/NotFound';
import Feed from './components/Feed';
import Course from './components/Course';
import Profile from './components/Profile';
import CourseDetail from './components/CourseDetail';

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
            <Route path='/course/:id' element={<CourseDetail />} />
            <Route path='/profile' element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
