import { useState, useEffect } from "react";

export async function GetMicroBreweries() {
    const url = "https://api.openbrewerydb.org/v1/breweries?by_type=micro&per_page=50";

    let res = await fetch(url);
    let data = await res.json();
    let microbreweries = data;

    // console.log(microbreweries); //display successfully fetched data

    if (res.status === 404) {
        alert("Breweries down!!");
        return <div> Beers running dry showing at the moment.</div>
    } else {
        return microbreweries.map((brewery) => ({
            id: brewery.id,
            name: brewery.name,
            state: brewery.state,
            website_url: brewery.website_url,
        }));
    }
}
export function ListOfBreweries() {
    const [loading, setLoading] = useState('');
    const [breweries, setBreweries] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                setBreweries(await GetMicroBreweries());
                setLoading(false);
            } catch (err) {
                setError(error);
                setLoading(true);
            }
        })();
    }, [error]);

    return {
        loading,
        breweries,
        error,
    };
}
