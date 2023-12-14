import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Data from '../data/Data';

function CourseDetail() {
    const [course, setCourse] = useState();
    const { isLoggedIn, setIsLoggedIn } = useAuth();
    const navigate = useNavigate();

    const fetchMaterials = async () => {
        const fetchedUser = await Data.fetchUser();
        if (fetchedUser === undefined) {
            navigate('/login');
        }

        const fetchedMaterial = await Data.fetchMaterialById(id);
        setCourse(fetchedMaterials);
    };

    useEffect(() => {
        fetchMaterials();
    }, []);

    return (
        <div className="CourseDetail container">
            
        </div>
    );
}

export default CourseDetail;