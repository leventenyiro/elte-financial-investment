import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Data from '../data/Data';

function Course() {
    const { id } = useParams();
    const [courseList, setCourseList] = useState();
    const { isLoggedIn, setIsLoggedIn } = useAuth();
    const navigate = useNavigate();

    const fetchMaterialById = async () => {
        const fetchedUser = await Data.fetchUser();
        if (fetchedUser === undefined) {
            navigate('/login');
        }

        const fetchedMaterials = await Data.fetchMaterialsByUser(fetchedUser);
        setCourseList(fetchedMaterials);
    };

    useEffect(() => {
        fetchMaterialById();
    }, []);

    return (
        <div className="Course container">
            <h1>Your courses</h1>
            {courseList && Object.keys(courseList).map((topic) => (
                <div key={topic}>
                    <h2>{topic.charAt(0).toUpperCase() + topic.slice(1)}</h2>
                    <div className="row">
                        {courseList[topic].map((course, index) => (
                            <div key={course.id} className='col-md-4 pt-4'>
                                <div className='news'>
                                    <h2 className='px-4 pt-4'>{course.title}</h2>
                                    <p className='px-4 py-3'>{course.content}</p>
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

export default Course;