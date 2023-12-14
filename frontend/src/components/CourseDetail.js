import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Data from '../data/Data';

function CourseDetail() {
    const { id } = useParams();
    const [course, setCourse] = useState();
    const { isLoggedIn, setIsLoggedIn } = useAuth();
    const navigate = useNavigate();

    const fetchMaterialById = async () => {
        const fetchedUser = await Data.fetchUser();
        if (fetchedUser === undefined) {
            navigate('/login');
        }

        console.log(id);
        const fetchedMaterial = await Data.fetchMaterialById(id);

        if (fetchedMaterial === undefined)
            navigate('/course');

        console.log(fetchedMaterial);
        // setCourse(fetchedMaterial);
    };

    useEffect(() => {
        fetchMaterialById();
    }, []);

    return (
        <div className="CourseDetail container">
            <h1>Your courses</h1>
        </div>
    );
}

export default CourseDetail;