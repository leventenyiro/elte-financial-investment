import { format } from 'date-fns';
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Data from '../data/Data';

function CourseDetail() {
    const { id } = useParams();
    const [course, setCourse] = useState({});
    const { isLoggedIn, setIsLoggedIn } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        fetchMaterialById();
    }, []);

    const fetchMaterialById = async () => {
        const fetchedUser = await Data.fetchUser();
        if (fetchedUser === undefined) {
            navigate('/login');
        }

        const fetchedMaterial = await Data.fetchMaterialById(id);

        if (fetchedMaterial === undefined)
            navigate('/course');

        setCourse(fetchedMaterial);
    };

    return (
        <div className="CourseDetail container">
            <h1>{course.title}</h1>
            <cite className='text-secondary'>{course.createdAt && format(new Date(course.createdAt), 'yyyy-MM-dd')}</cite>

            {course.abstract === 'nope' && <p><i>{course.abstract}</i></p>}
            <p className='mt-2'>{course.content}</p>

            <h2>Quiz</h2>
        </div>
    );
}

export default CourseDetail;