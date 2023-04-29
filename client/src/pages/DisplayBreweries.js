import { ListOfBreweries } from '../components/api';
import { useState } from 'react';
import { Link } from "react-router-dom"
import '../components/styling/BreweriesList.css'
import Avatar from '@mui/material/Avatar';
import { FormControl, InputLabel, MenuItem, Pagination, Select, TextField } from '@mui/material';

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
    const notfoundicon = require("../img/notfoundicon.png");

    return (
        <div className='brewerylist-backdrop'>
            <div className='textfield-section'>
                <TextField
                    type='search'
                    value={byState}
                    onChange={filterByState}
                    className='filter-input'
                    placeholder='Filter by State'
                    label="filter by state"
                    style={{ color: 'white', width: '40%' }}
                    InputLabelProps={{ style: { color: 'white' } }}
                    variant='outlined'
                />
                <TextField
                    type='search'
                    value={byName}
                    onChange={filterByName}
                    className='filter-input'
                    placeholder='Filter by Name'
                    label="filter by brewery name"
                    style={{ color: 'white', width: '40%' }}
                    InputLabelProps={{ style: { color: 'white' } }}
                />
            </div>
            <FormControl variant='standard'
                sx={{ m: 1, minWidth: 120, marginLeft: '80%', }}
                style={{ justifyContent: 'right', marginTop: '10px', }}>
                <InputLabel sx={{ color: 'white', }} >Sort</InputLabel>
                <Select>
                    <MenuItem onClick={sortingState} disabled={!result || byState !== ''}>Sort by state {sortByState}</MenuItem>
                    <MenuItem onClick={sortingName} disabled={!result || byName !== ''}>Sort by name {sortByName}</MenuItem>
                </Select>
            </FormControl>
            {/* display list of breweries */}
            <div className='brewery-list'>
                {currentBreweries && currentBreweries.length > 0 ? (
                    currentBreweries.map((brewery) => (
                        <div key={brewery.id} className="brewery">
                            <Avatar
                                alt="brewery-icons"
                                src={`https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${brewery.website_url}/&size=256`}
                                sx={{ width: 48, height: 48 }}
                            />
                            <span className='brewery-name'> {brewery.name}</span>
                            <span className='brewery-state'>State: {brewery.state}</span>
                            <Link to={`/BrewQueryApp/breweries/${brewery.id}`}>
                                <button className='button-details'>Details</button>
                            </Link>
                        </div>
                    ))
                ) : (<div><img src={notfoundicon} alt='notfoundicon' height={80} width={80} /><p style={{ color: "red", fontWeight: "bold" }}>Please check your input</p></div>)
                }
                {result && result.length > 0 && currentBreweries && currentBreweries.length === 0 ? (
                    result.map((brewery) => (
                        <div key={brewery.id} className="brewery">
                            <Avatar
                                alt="brewery-icons"
                                src={`https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${brewery.website_url}/&size=256`}
                                sx={{ width: 48, height: 48 }}
                            />
                            <span className='brewery-name'> {brewery.name}</span>
                            <span className='brewery-state'>State: {brewery.state}</span>
                            <Link to={`/BrewQueryApp/breweries/${brewery.id}`}>
                                <button className='button-details'>Details</button>
                            </Link>
                        </div>
                    ))
                ) : null}
            </div>
            <Pagination
                count={pageCount}
                page={currentPage}
                boundaryCount={1}
                siblingCount={1}
                onChange={handlePageClick}
                size='large'
                showFirstButton
                showLastButton
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '20px',
                    padding: '1%',
                }}
                classes={{
                    ul: 'Pagination-ul',
                    root: 'Pagination-root',
                    select: 'Pagination-select',
                    selectIcon: 'Pagination-selectIcon',
                    menuItem: 'Pagination-menuItem',
                    outlined: 'Pagination-outlined',
                    action: 'Pagination-action',
                }}
            />
        </div>
    )
}