// import { BeerNews } from "../components/BeerNews"
import { BrewerDefinition } from "../components/BrewerDefinition"
import beerservedvideo from '../video/beerservedvideo.mp4';
import '../components/styling/Home.css'
import BrewTimeline from "../components/Timeline";
// background image soruced from https://wallpaperaccess.com/

export function Home() {
    return (
        <div>
            <div className="video-section">
                <div className="video-container" >
                    <video autoPlay loop muted className="beerservedvideo" >
                        <source src={beerservedvideo} type="video/mp4" />
                    </video>
                    <button className="button-home" >Search Brewery</button>
                </div>
            </div>
            <div className="background-image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/vintagebackground.png` }}>
                {/* <BeerNews /> */}
                <BrewTimeline />
                <BrewerDefinition />
            </div>
        </div>
    )
}

