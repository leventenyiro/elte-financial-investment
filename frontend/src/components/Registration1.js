import { useState, useEffect } from "react";

function Registration1() {
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');

    // check localStorage state
    useEffect(() => {
        if(localStorage.getItem('reg-form-step-1')) {
            const data = JSON.parse(localStorage.getItem('reg-form-step-1'));

            console.log(JSON.stringify(data))

            // set the saved values
            setFirstname(data.firstName);
            setLastname(data.lastName);
            setEmail(data.email);
            setPassword(data.password);
            setPasswordAgain(data.passwordAgain);
        } 
    }, [])

    const handleRegistration = async (e) => {
        e.preventDefault();

        document.querySelectorAll('.is-invalid').forEach(element => {
            element.classList.remove('is-invalid');
        });

        if (firstName === '') {
            document.querySelector('#inputFirstname').classList.add('is-invalid');
            return;
        }

        if (lastName === '') {
            document.querySelector('#inputLastname').classList.add('is-invalid');
            return;
        }

        if (email === '') {
            document.querySelector('#inputEmail').classList.add('is-invalid');
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
            firstname: firstName,
            lastname: lastName,
            email: email,
            password: password,
            passwordAgain: passwordAgain
        }))

        window.location = '/registration2';
    }

    return (
        <div className="container d-flex justify-content-center">
            <div className="col-12 col-md-6">
                <h1>Create my profile</h1>
                <form onSubmit={handleRegistration}>
                    <div className="row">
                        <div className="col-lg-6 mb-4">
                            <label htmlFor="inputFirstname" className="form-label">Firstname</label>
                            <input type="text" className="form-control" id="inputFirstname" name="firstname" value={firstName} onChange={e => setFirstname(e.target.value)} />
                            <div className="invalid-feedback">Firstname is required</div>
                        </div>

                        <div className="col-lg-6 mb-4">
                            <label htmlFor="inputLastname" className="form-label">Lastname</label>
                            <input type="text" className="form-control" id="inputLastname" name="lastname" value={lastName} onChange={e => setLastname(e.target.value)} />
                            <div className="invalid-feedback">Lastname is required</div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="inputEmail" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                        <div className="invalid-feedback">Email is required</div>
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