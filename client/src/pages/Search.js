import { useState } from "react";
import { SearchBrewery } from "../components/SearchBrewery";
import { SearchBreweryResults } from "../components/SearchBreweryResults";
import '../components/styling/Search.css';
import { TypeAnimation } from 'react-type-animation';
import { ShowMap } from "../components/Map"

export function Search() {

    const [results, setResults] = useState([]);

    return (
        <div>
            <div>
                <div className="scrolling-text">
                    <span>Search Breweries by Name Click to see brewery's details</span>
                </div>
                <ShowMap />
            </div>

            <div className="search-container">
                <div>
                    <TypeAnimation
                        className='type-animation'
                        sequence={[
                            'Search Brewery by Name',
                            2000,
                            'E.g., type "405" to search for 405 Brewing Co.',
                            1000,
                            'or type keyword "brew" for list of breweries.',
                            1000,
                        ]}
                        speed={50}
                        style={{ fontSize: '1em' }}
                        repeat={Infinity}
                    />
                </div>
                <SearchBrewery setResults={setResults} />
                <SearchBreweryResults results={results} />
            </div>
        </div>
    )
}

