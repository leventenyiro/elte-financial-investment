import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Data from "../data/Data";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const { setIsLoggedIn } = useAuth();

    const handleLogin = async (e) => {

        /*
            "email": "test@example.com",
            "password": "asdasd",
        */
        e.preventDefault();
        const res = await Data.userLogin(email, password);
        if (!res) {
            console.error('Response not found!')
        } else {
            setIsLoggedIn(true);
            document.cookie = "authCookie" + "=" + res; // set cookie
            navigate('/feed');
        }
        setEmail('');
        setPassword('');
    } 

    return (
        <div className="container d-flex justify-content-center">
            <div className="col-12 col-md-6">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="inputEmail" className="form-label">Email</label>
                        <input required type="email" className="form-control" id="inputEmail" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                        <div className="invalid-feedback">Email is required</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-label">Password</label>
                        <input required type="password" className="form-control" id="inputPassword" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                        <div className="invalid-feedback">Password is required</div>
                    </div>

                    <div className="row d-flex align-items-center">
                        <div className="col-7">
                            <a href="/registration1">I don't have profile yet</a>
                        </div>
                        <div className="col-5 text-end">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;