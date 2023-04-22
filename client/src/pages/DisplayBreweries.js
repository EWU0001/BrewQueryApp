import { ListOfBreweries } from '../api';
import { useState } from 'react';
import { Link } from "react-router-dom"
// import { TypeAnimation } from 'react-type-animation';
import '../components/styling/BreweriesList.css'
import Avatar from '@mui/material/Avatar';

export function DisplayBreweries() {

    const { loading, error, breweries } = ListOfBreweries();
    const [byState, setByState] = useState('');
    const [result, setResult] = useState();
    const [sortByState, setSortByState] = useState();
    const [byName, setByName] = useState('');
    const [sortByName, setSortByName] = useState();

    if (!result && breweries && breweries.length > 0) {
        setResult(breweries);
    }
    if (loading) {
        return <p>Bringing you a list of breweries...</p>
    }
    if (error) {
        return <p>Breweries Down!! :{error.message}</p>
    }
    //filtering by state
    const filterByState = (e) => {
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
    //sorting by state
    const sortingState = () => {
        const sorted = [...result].sort((a, b) => {
            return sortByState === '⬆' ? a.state.localeCompare(b.state) : b.state.localeCompare(a.state);
        });
        setResult(sorted);
        setSortByState(sortByState === '⬆' ? '⬇' : '⬆');
    };

    //filtering by name
    const filterByName = (e) => {
        const keyword = e.target.value;
        if (keyword !== '') {
            const results = breweries.filter((brewery) => {
                return brewery.name.toLowerCase().startsWith(keyword.toLowerCase());
            });
            setResult(results);
        }
        else {
            setResult(breweries);
        }
        setByName(keyword);
    };

    //sorting by name
    const sortingName = () => {
        const sorted = [...result].sort((a, b) => {
            return sortByName === '⬆' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        });
        setResult(sorted);
        setSortByName(sortByName === '⬆' ? '⬇' : '⬆');
    };

    return (
        <div className='backdrop'>
            <br />
            <input
                type='search'
                value={byState}
                onChange={filterByState}
                className='filter-input'
                placeholder='Filter by State'
            />
            <input
                type='search'
                value={byName}
                onChange={filterByName}
                className='filter-input'
                placeholder='Filter by Name'
            />
            <div>
                <button onClick={sortingState} disabled={!result || byState !== ''}>
                    Sort by state {sortByState}
                </button>
                <button onClick={sortingName} disabled={!result || byName !== ''}>
                    Sort by name {sortByName}
                </button>
            </div>
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
                            <Link to={`/BrewQueryApp/breweries/${brewery.id}`}>
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