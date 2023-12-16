import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Data from '../data/Data';

function Investment() {
    const [investmentList, setInvestmentList] = useState([]);
    const { isLoggedIn, setIsLoggedIn } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {

        const fetchInvestments = async () => {
            const fetchedUser = await Data.fetchUser();
            if (fetchedUser === undefined) {
                navigate('/login');
            }
    
            const fetchedInvestments = await Data.fetchInvestmentsByUser(fetchedUser);
            setInvestmentList(fetchedInvestments);
        };

        fetchInvestments();
    }, []);

    console.log(Array.isArray(investmentList))
    return (
        <div className="Course container">
            <h1>Your Investment Offers</h1>
            {investmentList && Object.keys(investmentList).map((topic) => (
                <div key={topic}>
                    <h2>{topic.charAt(0).toUpperCase() + topic.slice(1)}</h2>
                    <div className="row">
                        {investmentList[topic].map((inv, index) => (
                            <div key={inv.id} className="col-sm-6 col-md-4 col-lg-3 pt-4">
                            <div className="col">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h5 className="card-title">{inv.title}</h5>
                                        <p className="card-text">Topic: <strong>{inv.topic}</strong></p>
                                        <p className="card-text">Risk level: <strong>{inv.risk}</strong></p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        ))}
                    </div>
                    <hr />
                </div>
            ))}

        </div>
    );
}

export default Investment;