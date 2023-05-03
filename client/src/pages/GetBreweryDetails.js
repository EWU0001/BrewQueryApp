import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../components/styling/BreweryDetails.css'
import { ShowMap } from '../components/Map';

export function GetBreweryDetails() {
    const { id } = useParams();
    const [brewery, setBrewery] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://api.openbrewerydb.org/v1/breweries/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to get brewery details');
                }
                return response.json()
            })
            .then(brewery => setBrewery(brewery))
            .catch(error => { setError(error); console.error(error) });

    }, [id]);
    // console.log(brewery); // test if object fetch successfully 

    return (
        <div>
            {error ? (<div className='error-messgae'>error message: {error.message}</div>
            ) : (
                <div>
                    <div className='brewery-background-image'>
                        <div className='brewery-details'>
                            <h2>{brewery.name}</h2>
                            <p>Brewery Name: {brewery.name}</p>
                            <p>Street: {brewery.street}</p>
                            <p>City: {brewery.city}</p>
                            <p>State: {brewery.state}</p>
                            {brewery.website_url ? (
                                <a onClick={() => window.open(brewery.website_url, 'breweryWebsite')} id='website_url' href='#!'>{brewery.website_url}</a>
                            ) : ("")}
                        </div>
                    </div>
                    <div className='brewery-details-map'>
                        {brewery.latitude && brewery.longitude ? (
                            <ShowMap latitude={brewery.latitude} longitude={brewery.longitude} />
                        ) : (
                            <h3>Location Not Available</h3>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}