import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate()

    return (
        <div className="Home container">
            <div className="row">
                <div className=".col-md-6">
                    <h1 className="display-1">Try out our brand new investment application.</h1>
                    <button className="btn btn-primary" onClick={() => navigate('/registration1')}>Create your profile</button>
                </div>
            </div>
        </div>
    );
}

export default Home;