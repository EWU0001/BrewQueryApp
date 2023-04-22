import { ListOfBreweries } from '../api';
import { useState } from 'react';
import { Link } from "react-router-dom"
import '../components/styling/BreweriesList.css'
import Avatar from '@mui/material/Avatar';
import { FormControl, InputLabel, MenuItem, Pagination, Select } from '@mui/material';

export function DisplayBreweries() {

    const { loading, error, breweries } = ListOfBreweries();
    const [byState, setByState] = useState('');
    const [result, setResult] = useState('');
    const [sortByState, setSortByState] = useState();
    const [byName, setByName] = useState('');
    const [sortByName, setSortByName] = useState();
    //for usage of pagination
    const [breweriesPerPage] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);

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
        setCurrentPage(1);
    };
    //sorting by state
    const sortingState = () => {
        const sorted = [...result].sort((a, b) => {
            return sortByState === '⬆' ? a.state.localeCompare(b.state) : b.state.localeCompare(a.state);
        });
        setResult(sorted);
        setSortByState(sortByState === '⬆' ? '⬇' : '⬆');
        setCurrentPage(currentPage);
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
        setCurrentPage(1);
    };

    //sorting by name
    const sortingName = () => {
        const sorted = [...result].sort((a, b) => {
            return sortByName === '⬆' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        });
        setResult(sorted);
        setSortByName(sortByName === '⬆' ? '⬇' : '⬆');
        setCurrentPage(currentPage);
    };

    const pageCount = Math.ceil(result.length / breweriesPerPage);
    const lastBreweryIndex = currentPage * breweriesPerPage;
    const firstBreweryIndex = lastBreweryIndex - breweriesPerPage;
    const currentBreweries = result.slice(firstBreweryIndex, lastBreweryIndex);

    //handle page click function calls whenever click on page buton and update to currentpage state variable
    const handlePageClick = (event, value) => {
        setCurrentPage(value);
    };
    // console.log(currentBreweries); //to check current breweries per page


    return (
        <div className='backdrop'>
            <Pagination
                count={pageCount}
                page={currentPage}
                onChange={handlePageClick}
                color='primary'
                size='large'
                showFirstButton
                showLastButton
            />
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
                <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }} color='primary' >
                    <InputLabel id="sort-label" >Sort</InputLabel>
                    <Select >
                        <MenuItem onClick={sortingState} disabled={!result || byState !== ''}>Sort by state {sortByState}</MenuItem>
                        <MenuItem onClick={sortingName} disabled={!result || byName !== ''}>Sort by name {sortByName}</MenuItem>
                    </Select>
                </FormControl>
                {/* <button onClick={sortingState} disabled={!result || byState !== ''}>
                        Sort by state {sortByState}
                    </button>
                    <button >
                        Sort by name {sortByName}
                    </button> */}


            </div>
            {/* display lost of breweries */}
            <div className='brewery-list'>
                {currentBreweries && currentBreweries.length > 0 ? (
                    currentBreweries.map((brewery) => (
                        <div key={brewery.id} className="brewery">
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
                        </div>
                    ))
                ) : (<p>No breweries </p>)
                }
                {result && result.length > 0 && currentBreweries && currentBreweries.length === 0 ? (
                    result.map((brewery) => (
                        <div key={brewery.id} className="brewery">
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
                        </div>
                    ))
                ) : null}
            </div>
        </div>
    )
}