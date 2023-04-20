import './styling/Home.css'
import { useState, useEffect } from 'react';

export function FunFacts() {

    const [microBreweries, setMicroBreweries] = useState(null);
    const [brewpubs, setBrewpubs] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const microbreweriesResponse = await fetch("https://api.openbrewerydb.org/v1/breweries/meta?by_type=micro&by_country=united_states");
                const brewpubsResponse = await fetch("https://api.openbrewerydb.org/v1/breweries/meta?by_type=brewpub&by_country=united_states");

                if (!microbreweriesResponse.ok || !brewpubsResponse.ok) {
                    throw new Error("No respond...");
                }

                const [microbreweriesData, brewpubsData] = await Promise.all([microbreweriesResponse.json(), brewpubsResponse.json()]);
                setMicroBreweries(microbreweriesData.total);
                setBrewpubs(brewpubsData.total);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="fun-facts-section">
            <h3 className="fun-facts-heading">Fun Facts</h3>
            <div className="fact-row">
                <div className="fact-column">
                    {error ? <p>{error.message}</p> : microBreweries ? <p>{microBreweries}</p> : <p>Loading...</p>}
                    <h6>Craft Breweries in the US</h6>
                </div>
                <div className="fact-column">
                    {error ? <p>{error.message}</p> : brewpubs ? <p>{brewpubs}</p> : <p>Loading...</p>}
                    <h6>Brew Pubs in the US</h6>
                </div>
            </div>
        </div>
    );
}
