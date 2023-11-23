import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import NotFound from './components/NotFound';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
