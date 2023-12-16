import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../utils/getCookie';
import { useAuth } from '../contexts/AuthContext';
import Data from '../data/Data';

function Profile() {
    const { isLoggedIn, setIsLoggedIn } = useAuth();
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
        if (!isLoggedIn)
            navigate('/login');
        
        fetchUserData();
    }, [isLoggedIn]);

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
                                <input type="text" className="form-control" name="firstName" value={profileData?.firstName} onChange={handleInputChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Last Name</label>
                                <input type="text" className="form-control" name="lastName" value={profileData?.lastName} onChange={handleInputChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" name="email" value={profileData?.email} onChange={handleInputChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Risk Level</label>
                                <input type="text" disabled={true} className="form-control" name="risk" value={profileData?.risk} onChange={handleInputChange} />
                            </div>
                            <div className="p-3 border">
                                <p className="mb-2">Followed Topics:</p>
                                <div className="d-flex m-3 align-items-center">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="fund" name="fund" checked={profileData?.fund} onChange={handleInputChange} style={{transform: "scale(1.5)"}} />
                                        <label className="form-check-label" htmlFor="fund">Fund</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="stock" name="stock" checked={profileData?.stock} onChange={handleInputChange} style={{transform: "scale(1.5)"}} />
                                        <label className="form-check-label" htmlFor="stock">Stock</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="crypto" name="crypto" checked={profileData?.crypto} onChange={handleInputChange} style={{transform: "scale(1.5)"}} />
                                        <label className="form-check-label" htmlFor="crypto">Crypto</label>
                                    </div>
                                </div>
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