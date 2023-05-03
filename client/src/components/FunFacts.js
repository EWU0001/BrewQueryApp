import './styling/Home.css'
import { useState, useEffect } from 'react';

export function FunFacts() {

    const [microBreweries, setMicroBreweries] = useState(null);
    const [microBreweriesError, setMicroBreweriesError] = useState(null);
    const [brewpubs, setBrewpubs] = useState(null);
    const [brewpubsError, setBrewpubsError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const microbreweriesResponse = await fetch("https://api.openbrewerydb.org/v1/breweries/meta?by_type=micro&by_country=united_states");
                const brewpubsResponse = await fetch("https://api.openbrewerydb.org/v1/breweries/meta?by_type=brewpub&by_country=united_states");

                if (!microbreweriesResponse.ok) {
                    throw new Error("Failed to fetch microbreweries data, please check your internet connection and try again.");
                }
                if (!brewpubsResponse.ok) {
                    throw new Error("Failed to fetch brewpubs data, please check your internet connection and try again.");
                }

                const [microbreweriesData, brewpubsData] = await Promise.all([microbreweriesResponse.json(), brewpubsResponse.json()]);
                setMicroBreweries(microbreweriesData.total);
                setBrewpubs(brewpubsData.total);
            } catch (error) {
                if (error.message.includes('microbreweries')) {
                    setMicroBreweriesError(error);
                } else if (error.message.includes('brewpubs')) {
                    setBrewpubsError(error);
                }
            }
        };
        fetchData();
    }, []);

    return (
        <div className="fun-facts-section">
            <h3 className="fun-facts-heading">Fun Facts</h3>
            <div className="fact-row">
                <div className="fact-column">
                    {microBreweries ? (
                        <p>{microBreweries}</p>
                    ) : (
                        microBreweriesError && <p>{microBreweriesError.message}</p>
                    )}
                    <h6>Craft Breweries in the US</h6>
                </div>
                <div className="fact-column">
                    {brewpubs ? (
                        <p>{brewpubs}</p>
                    ) : (
                        brewpubsError && <p>{brewpubsError.message}</p>
                    )}
                    <h6>Brew Pubs in the US</h6>
                </div>
            </div>
        </div>
    );

}
