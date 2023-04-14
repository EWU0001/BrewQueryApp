import { ListOfBreweries } from '../api';
import { useState } from 'react';
import { Link } from "react-router-dom"
import { TypeAnimation } from 'react-type-animation';
import '../components/styling/BreweriesList.css'

export function DisplayBreweries() {

    const { loading, error, breweries } = ListOfBreweries();
    const [byState, setByState] = useState(breweries);
    const [result, setResult] = useState('');
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
        <div>

            <TypeAnimation className='type-animation-text'
                sequence={[
                    'MicroBreweries from State of New York',
                    1000,
                    'MicroBreweries from State of Texas',
                    1000,
                    'MicroBreweries from State of Nevada',
                    1000,
                    'MicroBreweries from State of Indiana',
                    1000,
                    'MicroBreweries from State of Michigan',
                    1000,
                    'MicroBreweries from State of California',
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
                            <span className='brewery-name'>Brewery: {brewery.name}</span>
                            <span className='brewery-state'>State: {brewery.state}</span>
                            <Link to={`/breweries/${brewery.id}`}>
                                <button className='button-details'>Details</button>
                            </Link>
                        </p>
                    ))
                ) : breweries.map((brewery) => (
                    <p key={brewery.id} className="brewery">
                        <span className='brewery-name'>Brewery: {brewery.name}</span>
                        <span className='brewery-state'>State: {brewery.state}</span>
                        <Link to={`/breweries/${brewery.id}`}>
                            <button className='button-details'>Details</button>
                        </Link>
                    </p>
                ))}
            </div>
            <br />
        </div>
    )
}