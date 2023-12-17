import { format } from "date-fns";
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Data from '../data/Data';

function InvestmentDetail() {
    const { id } = useParams();
    const [investment, setInvestment] = useState({});
    const { isLoggedIn, setIsLoggedIn } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {

        const fetchInvestment = async () => {
            const fetchedUser = await Data.fetchUser();
            if (fetchedUser === undefined) {
                navigate('/login');
            }

            const fetchedInvestment = await Data.fetchInvestmentById(id);
            setInvestment(fetchedInvestment);
        };

        fetchInvestment();
    }, []);

    useEffect(() => {
        if (!isLoggedIn)
            navigate('/login');
    }, [isLoggedIn]);

    if (!investment || !investment.investment) {
        return null;
    }

    return (
        <div className="InvestmentDetail container">
            <h1>{investment.investment.title}</h1>
            <cite className="text-secondary">
                {investment.investment.createdAt && format(new Date(investment.investment.createdAt), "yyyy-MM-dd")}
            </cite>
            <p>Risk: {investment.investment.risk}</p>
            <p>Topic: {investment.investment.topic}</p>
            <p>{investment.investment.content}</p>
        </div>
    );
}

export default InvestmentDetail;