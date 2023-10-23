// import { BeerNews } from "../components/BeerNews"
import { useNavigate } from 'react-router-dom';
import { FunFacts } from "../components/FunFacts"
import beerservedvideo from '../video/beerservedvideo.mp4';
import '../components/styling/Home.css'
import BrewTimeline from "../components/Timeline";
// background image soruced from https://wallpaperaccess.com/vintage-beer
import Tooltip from "@mui/material/Tooltip";

export function Home() {
    const history = useNavigate();
    const searchClick = () => {
        history('/BrewQueryApp/search');
    };   

    return (
        <div className="home-background-image">
            <div className="video-section">
                <div className="video-container" >
                    <video autoPlay loop muted className="beerservedvideo" >
                        <source src={beerservedvideo} type="video/mp4" />
                    </video>
                    <Tooltip title="Search">
                        <button className="button-home" onClick={searchClick}>Search Brewery</button>
                    </Tooltip>
                </div>
            </div>
            <div className="brewtimeline-section">
                <BrewTimeline />
            </div>
            <div className="beernews-section">
                {/* news api allows 50 requests every 12hours under free usage */}
                {/* <BeerNews /> */}
            </div>
            <div>
                <FunFacts />
            </div>

        </div>
    )
}

