import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Data from '../data/Data';

function Course() {
    const [courseList, setCourseList] = useState([]);
    const { isLoggedIn, setIsLoggedIn } = useAuth();
    const navigate = useNavigate();

    useEffect(() => { 
        if (!isLoggedIn) {
            return navigate('/login');
        }
    }, []);

    useEffect(() => {
        setCourseList(Data.fetchCourses());
    }, []);

    return (
        <div className="Course container">
            <h1>Your courses</h1>
            <div className="row">
                {/* {newsList.map((news) => (
                    <div key={news.id} className='col-md-4 pt-4'>
                        <div className='news'>
                            <img src={news.imageUrl} className='img-fluid' alt={news.title} />
                            <h2 className='px-4 pt-4'>{news.title}</h2>
                            <p className='px-4 py-3'>{news.description}</p>
                        </div>
                    </div>
                ))} */}
            </div>
        </div>
    );
}

export default Course;