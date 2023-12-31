import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Data from '../data/Data';

function Header() {
    const { isLoggedIn, setIsLoggedIn } = useAuth();
    const [notificationsNumber, setNotificationsNumber] = useState(0);

    const handleLogout = () => {
        document.cookie = "authCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setIsLoggedIn(false);
    }

    useEffect(() => {
        const fetchNotification = async () => {
            const notifications = await Data.fetchNotification();
            setNotificationsNumber(notifications.length)
        }
        
        fetchNotification();
    }, []);

    return (
        <div className="Header">
            <nav className="navbar navbar-expand-md navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/feed">Financial Investment</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
                            <li className="nav-item">
                                <a className="nav-link" href={isLoggedIn ? '/feed' : '/'}>Home</a>
                            </li>
                            {isLoggedIn && (
                                <li className="nav-item">
                                    <a className="nav-link" href="/course">Course</a>
                                </li>
                            )}
                            {isLoggedIn && (
                                <li className="nav-item">
                                    <a className="nav-link" href="/investment">Investment</a>
                                </li>
                            )}
                            {isLoggedIn && (
                                <li className="nav-item">
                                    <a className="nav-link d-flex align-items-center" href="/notifications">
                                        Notifications
                                        <span className={`badge rounded-pill ${notificationsNumber > 0 ? 'bg-danger' : 'bg-success'} ms-1`}>
                                            {notificationsNumber} <span className="visually-hidden">unread messages</span>
                                        </span>
                                    </a>  
                                </li>
                            )}
                            {isLoggedIn && (
                                <li className="nav-item">
                                    <a className="nav-link d-flex align-items-center" href="/profile">
                                        Profile
                                    </a>
                                </li>
                            )}
                        </ul>

                        <div className="d-flex justify-content-md-end mb-2 mb-sm-0">
                            {!isLoggedIn ? (
                                <button className="btn btn-primary btn-sm" onClick={() => window.location = '/login'}>Sign in</button>
                            ) : (
                                <button className="btn btn-danger btn-sm" onClick={handleLogout}>Sign out</button>
                            )}
                        </div>
                    </div >
                </div >
            </nav >
        </div>
    );
}

export default Header;