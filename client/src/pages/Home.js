import { BeerNews } from "../components/BeerNews"
import { useNavigate } from 'react-router-dom';
import { BrewerDefinition } from "../components/BrewerDefinition"
import beerservedvideo from '../video/beerservedvideo.mp4';
import '../components/styling/Home.css'
import BrewTimeline from "../components/Timeline";
// background image soruced from https://wallpaperaccess.com/

export function Home() {
    const history = useNavigate();
    const searchClick = () => {
        history('/search');
    };

    return (
        <div className="home-background-image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/vintagebackground.png` }}>
            <div className="video-section">
                <div className="video-container" >
                    <video autoPlay loop muted className="beerservedvideo" >
                        <source src={beerservedvideo} type="video/mp4" />
                    </video>
                    <button className="button-home" onClick={searchClick}>Search Brewery</button>
                </div>
            </div>
            <div>
                <BrewTimeline />
                <div>
                    {/* news api allows 50 requests every 12hours under free usage */}
                    <BeerNews />
                    <BrewerDefinition />
                </div>
            </div>
        </div>
    )
}

