import { ListOfBreweries } from '../api';
import { useState } from 'react';
import { Link } from "react-router-dom"
import { TypeAnimation } from 'react-type-animation';
import '../components/styling/BreweriesList.css'
import Avatar from '@mui/material/Avatar';

export function DisplayBreweries() {

    const { loading, error, breweries } = ListOfBreweries();
    const [byState, setByState] = useState(breweries);
    const [result, setResult] = useState();

    if (!result && breweries && breweries.length > 0) {
        setResult(breweries);
    }

    if (loading) {
        return <p>Bringing you a list of breweries...</p>
    }
    if (error) {
        return <p>Breweries Down!! :{error.message}</p>
    }
    const filter = (e) => {
        const keyword = e.target.value;
        if (keyword !== '') {
            const results = breweries.filter((brewery) => {
                return brewery.state.toLowerCase().startsWith(keyword.toLowerCase());
            });
            setResult(results);
        } else {
            setResult(breweries);
        }
        setByState(keyword);
    };
    return (
        <div className='backdrop'>
            <TypeAnimation className='type-animation-text'
                sequence={[
                    `Craft Breweries from State of ${result}`,
                    1000, //wait 1second
                    `Craft Breweries from State of ${breweries.state}`,
                    1000,
                ]}
                speed={50}
                style={{ fontSize: '2em' }}
                repeat={Infinity}
            />
            <br />
            <input
                type='search'
                value={byState}
                onChange={filter}
                className='filter-input'
                placeholder='Filter by State'
            />
            <div className='brewery-list'>
                {result && result.length > 0 ? (
                    result.map((brewery) => (
                        <p key={brewery.id} className="brewery">
                            <span className='brewery-name'> {brewery.name}</span>
                            <span className='brewery-state'>State: {brewery.state}</span>
                            {/* <img height="100"  alt='brewery logo' /> */}
                            <Avatar
                                alt="brewery-icons"
                                src={`https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${brewery.website_url}/&size=256`}
                                sx={{ width: 48, height: 48 }}
                            />
                            <Link to={`/breweries/${brewery.id}`}>
                                <button className='button-details'>Details</button>
                            </Link>
                        </p>
                    ))) : (<p>No breweries </p>)
                }
            </div>
            <br />
        </div>
    )
}