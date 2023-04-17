import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../components/styling/BreweriesList.css'
import { ShowMap } from '../components/Map';

export function GetBreweryDetails() {
    const { id } = useParams();
    const [brewery, setBrewery] = useState({});

    useEffect(() => {
        fetch(`https://api.openbrewerydb.org/v1/breweries/${id}`)
            .then(response => response.json())
            .then(brewery => setBrewery(brewery))
            .catch(error => console.log(error));
    }, [id]);
    // console.log(brewery); // test if object fetch successfully 

    return (
        <div className='brewery-background-image'>
            <div className='brewery-details-map'>
                {brewery.latitude && brewery.longitude ? (
                    <ShowMap latitude={brewery.latitude} longitude={brewery.longitude} />
                ) : (
                    <h3>Location Not Available</h3>
                )}
            </div>
            <div className='brewery-details'>
                <h2>{brewery.name}</h2>
                <p>Brewery Name: {brewery.name}</p>
                <p>Street: {brewery.street}</p>
                <p>City: {brewery.city}</p>
                <p>State: {brewery.state}</p>
                <span>Website: <a href={brewery.website_url}>{brewery.website_url}</a></span>
            </div>
        </div>
    );
}