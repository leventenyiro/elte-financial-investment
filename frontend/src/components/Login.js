import { useState } from "react";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        // const res = await Data.login(username, password);

        // if (!res) {
        //     // error
        // } else {
        setUsername('');
        //     setIsLoggedIn(true);
        //     setShowModal(false);
        // }
        setPassword('');
    }

    return (
        <div className="container d-flex justify-content-center">
            <div className="col-12 col-md-6">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="inputUsername" className="form-label">Username</label>
                        <input required type="text" className="form-control" id="inputUsername" name="username" value={username} onChange={e => setUsername(e.target.value)} />
                        <div className="invalid-feedback">Username is required</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-label">Password</label>
                        <input required type="password" className="form-control" id="inputPassword" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                        <div className="invalid-feedback">Password is required</div>
                    </div>

                    <div className="row d-flex align-items-center">
                        <div className="col-7">
                            <a href="/registration">I don't have profile yet</a>
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