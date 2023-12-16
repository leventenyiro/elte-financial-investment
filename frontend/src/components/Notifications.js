import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Data from '../data/Data';

function Notification() {
    const [notificationsList, setNotificationsList] = useState([]);
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
        const fetchNotification = async () => {
            const notifications = await Data.fetchNotification();
            setNotificationsList(notifications);
        }
        
        fetchNotification();
    }, []);

    return (
        <div className="Feed container">
            <h1>Notifications for you</h1>
            <div className="row">
                { /* id", "text" */ }
                {notificationsList.length === 0 && <p>You are up to date! :)</p>}
                {notificationsList.map((noties) => (
                    <div key={noties.id} className='col-md-4 pt-4'>
                        <div className='news'>
                            <h2 className='px-4 pt-4'>{noties.id}</h2>
                            <p className='px-4 py-3'>{noties.text}</p>
                            <p className='px-4 py-3'>{noties.topic}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Notification;