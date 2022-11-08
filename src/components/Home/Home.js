import Video from '../../Img/ocean_beach_coast_shore_turquoise_1082.mp4'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Home.scss'
const Home = () => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <div className='home-content'>
                <div className='home-title'>
                    Ask what you like
                </div>
                <div className='home-slogan'>
                    Test your abilities now
                </div>
                <div className='home-started'>
                    {
                        isAuthenticated === false
                            ?
                            <button onClick={() => navigate('/login')}>
                                Get's started
                            </button>
                            :
                            <button onClick={() => navigate('/users')}>
                                Doing Quiz Now
                            </button>
                    }
                </div>
            </div>
            <video controls >
                <source src={Video} type="video/mp4" />
            </video>
        </div>
    )
}
export default Home;