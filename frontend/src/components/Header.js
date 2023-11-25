import { useAuth } from '../contexts/AuthContext';
// import Data from '../../data/Data';

function Header() {
    const { isLoggedIn, setIsLoggedIn } = useAuth();

    const handleLogout = () => {
        setIsLoggedIn(false);
    }

    return (
        <div className="Header">
            <nav className="navbar navbar-expand-md navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Financial Investment</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                        </ul>

                        <div className="d-flex justify-content-md-end mb-2 mb-sm-0">
                            <button className="btn btn-primary btn-sm" onClick={() => window.location = '/login'}>Sign in</button>
                            {/* {!isLoggedIn ? (
                                <button className="btn btn-primary btn-sm" onClick={() => window.location('/login')}>Sign in</button>
                            ) : (
                                <button className="btn btn-danger btn-sm" onClick={handleLogout}>Sign out</button>
                            )} */}
                        </div>
                    </div >
                </div >
            </nav >
        </div>
    );
}

export default Header;