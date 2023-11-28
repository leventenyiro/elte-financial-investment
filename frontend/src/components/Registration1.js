import { useState, useEffect } from "react";

function Registration1() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');

    // check localStorage state
    useEffect(() => {
        if(localStorage.getItem('reg-form-step-1')) {
            const data = JSON.parse(localStorage.getItem('reg-form-step-1'));

            console.log(JSON.stringify(data))

            // set the saved values
            setUsername(data.username);
            setEmail(data.email);
            setPhoneNumber(data.phoneNumber);
            setPassword(data.password);
            setPasswordAgain(data.passwordAgain);
        } 
    }, [])

    const handleRegistration = async (e) => {
        e.preventDefault();

        document.querySelectorAll('.is-invalid').forEach(element => {
            element.classList.remove('is-invalid');
        });

        if (username === '') {
            document.querySelector('#inputUsername').classList.add('is-invalid');
            return;
        }

        if (email === '') {
            document.querySelector('#inputEmail').classList.add('is-invalid');
            return;
        }

        if (phoneNumber === '') {
            document.querySelector('#inputPhoneNumber').classList.add('is-invalid');
            return;
        }

        if (password === '') {
            document.querySelector('#inputPassword').classList.add('is-invalid');
            return;
        }

        if (passwordAgain === '' || password !== passwordAgain) {
            document.querySelector('#inputPasswordAgain').classList.add('is-invalid');
            return;
        }
    
        localStorage.setItem("reg-form-step-1", JSON.stringify({
            username: username,
            email: email,
            phoneNumber: phoneNumber,
            password: password,
            passwordAgain: passwordAgain
        }))

        // get data from local storage this method
        // const data = JSON.parse(localStorage.getItem("reg-form-step-1")); 
        // const res = await Data.Registration(username, password);

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

export default Registration1;