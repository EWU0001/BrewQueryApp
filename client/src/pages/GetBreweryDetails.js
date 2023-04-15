import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../components/styling/BreweriesList.css'

export function GetBreweryDetails() {
    const { id } = useParams();
    const [brewery, setBrewery] = useState({});

    useEffect(() => {
        fetch(`https://api.openbrewerydb.org/v1/breweries/${id}`)
            .then(response => response.json())
            .then(brewery => setBrewery(brewery))
            .catch(error => console.log(error));
    }, [id]);
    // console.log(id);
    // console.log(brewery); // test if object fetch successfully 

    return (
        <div className='brewery-details-background'>
            <div className='background-image'>
                <div className='brewery-details'>
                    <h2>{brewery.name} details:</h2>
                    <p>Name: {brewery.name}</p>
                    <p>State: {brewery.state}</p>
                    <p>Website: </p>
                    <a href={brewery.website_url}>{brewery.website_url}</a>
                </div>
            </div>
        </div>
    );
}
// mapbox api key
// pk.eyJ1IjoibjExMjU0NzI2IiwiYSI6ImNsZ2JpNWt4bjAzd3gzcm8wdnBpNG9rcGcifQ.7KP5_-nRVDpmvqRfeDD_lA