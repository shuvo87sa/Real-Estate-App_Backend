import SearchBar from '../../components/searchBar/SearchBar';
import './homePage.scss';

function HomePage(){
    return (
        <div className='homePage'>
            <div className="textContainer">
                <div className="wrapper">
                <h1 className="tittle">
                    Find House & Room , Get Your Dream Place
                </h1>
                <p>At UrbanHaven, we offer quality flats and rooms for families 
                    and bachelors. Whether you need a cozy family home or a convenient 
                    space for solo living, we’re here to help you find the perfect fit. 
                    Your comfort is our priority!
                </p>
                <SearchBar/>
                <div className="boxes">
                    <div className="box">
                        <h1>3+</h1>
                        <h2>Years of Experience</h2>
                    </div>
                    <div className="box">
                        <h1>50+</h1>
                        <h2>Award Gained</h2>
                    </div>
                    <div className="box">
                        <h1>150+</h1>
                        <h2>Property Ready</h2>
                    </div>
                </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}

export default HomePage