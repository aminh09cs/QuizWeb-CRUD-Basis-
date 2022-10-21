import Video from '../../Img/ocean_beach_coast_shore_turquoise_1082.mp4'
const Home = () => {
    return (
        <div className="home-container">
            <div className='home-content'>
                <div className='home-title'>
                    Ask what you like
                </div>
                <div className='home-slogan'>
                    Everything you want is here. Learn and explore them
                </div>
                <div className='home-started'>
                    <button>
                        Get's started
                    </button>
                </div>
            </div>
            <video width="500px" height="500px" controls >
                <source src={Video} type="video/mp4" />
            </video>
        </div>
    )
}
export default Home;