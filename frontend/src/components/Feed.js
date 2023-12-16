import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Data from '../data/Data';

function Feed() {
    const [newsList, setNewsList] = useState([]);
    const { isLoggedIn, setIsLoggedIn } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }

        const checkUser = async () => {
            const fetchedUser = await Data.fetchUser();
            if (fetchedUser === undefined) {
                navigate('/login');
            }
        };

        checkUser();
    }, [isLoggedIn]);

    useEffect(() => {
        const fetchNews = async () => {
            const news = await Data.fetchNews();
            setNewsList(news);
        }
        
        fetchNews();
    }, []);

    return (
        <div className="Feed container">
            <h1>News for you</h1>
            <div className="row">
                {newsList.map((news) => (
                    <div key={news.id} className='col-md-4 pt-4'>
                        <div className='news'>
                            <h2 className='px-4 pt-4'>{news.title}</h2>
                            <p className='px-4 py-3'>{news.extract}</p>
                            <p className='px-4 py-3'>Topic: {news.topic}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Feed;