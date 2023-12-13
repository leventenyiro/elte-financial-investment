import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../utils/getCookie';
import Data from '../data/Data';

function Profile() {
    const navigate = useNavigate();
    const [profileData, setProfileData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        risk: '',
        fund: false,
        stock: false,
        crypto: false
    });

    useEffect(() => { 
        if (!localStorage.getItem('loggedIn')) {
            navigate('/login');
        } else {
            fetchUserData();
        }        
    }, [navigate]);

    const fetchUserData = async () => {
        const response = await Data.userData(getCookie('authCookie'));
        setProfileData(response);
    }

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setProfileData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    }

    const updateProfile = async () => {
        const response = await Data.userUpdate(
            profileData?.firstName,
            profileData?.lastName,
            profileData?.email,
            profileData?.risk,
            profileData?.fund,
            profileData?.stock,
            profileData?.crypto,
        );

        console.log(JSON.stringify(response, null, 2))
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h1 className="card-title">My Profile</h1>
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label className="form-label">First Name</label>
                                <input type="text" className="form-control" name="firstName" value={profileData.firstName} onChange={handleInputChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Last Name</label>
                                <input type="text" className="form-control" name="lastName" value={profileData.lastName} onChange={handleInputChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" name="email" value={profileData.email} onChange={handleInputChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Risk Level</label>
                                <input type="text" disabled={true} className="form-control" name="risk" value={profileData.risk} onChange={handleInputChange} />
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="fund" checked={profileData.fund} onChange={handleInputChange} />
                                <label className="form-check-label">Fund</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="stock" checked={profileData.stock} onChange={handleInputChange} />
                                <label className="form-check-label">Stock</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="crypto" checked={profileData.crypto} onChange={handleInputChange} />
                                <label className="form-check-label">Crypto</label>
                            </div>
                        </div>
                        <div className="card-footer text-end">
                            <button className="btn btn-success" onClick={updateProfile}>Update Profile</button>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}

export default Profile;