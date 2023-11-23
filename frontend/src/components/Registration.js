import { useState } from "react";

function Login() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');

    const handleRegistration = async (e) => {
        e.preventDefault();

        if (username === '') { // this is the way to add error
            document.querySelector('#inputUsername').classList.add('is-invalid');
        }
        // const res = await Data.Registration(username, password);

        if (true) // everything correct - then save temporary into localstorage
            window.location = '/registration2';
    }

    return (
        <div className="container d-flex justify-content-center">
            <div className="col-12 col-md-6">
                <h1>Create my profile</h1>
                <form onSubmit={handleRegistration}>
                    <div className="mb-4">
                        <label htmlFor="inputUsername" className="form-label">Username</label>
                        <input type="text" className="form-control" id="inputUsername" name="username" value={username} onChange={e => setUsername(e.target.value)} />
                        <div className="invalid-feedback">Username is required</div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="inputEmail" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                        <div className="invalid-feedback">Email is required</div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="inputPhoneNumber" className="form-label">Phone number</label>
                        <input type="tel" className="form-control" id="inputPhoneNumber" name="phoneNumber" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                        <div className="invalid-feedback">Phone number is required</div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="inputPassword" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                        <div className="invalid-feedback">Password is required</div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="inputPasswordAgain" className="form-label">Password again</label>
                        <input type="password" className="form-control" id="inputPasswordAgain" name="passwordAgain" value={passwordAgain} onChange={e => setPasswordAgain(e.target.value)} />
                        <div className="invalid-feedback">Password verification is required</div>
                    </div>

                    <div className="row d-flex align-items-center">
                        <div className="col-7">
                            <a href="/login">I already have a profile</a>
                        </div>
                        <div className="col-5 text-end">
                            <button className="btn btn-primary">Next</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;