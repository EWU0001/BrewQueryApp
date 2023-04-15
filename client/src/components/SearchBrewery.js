import { FaSearchengin } from 'react-icons/fa' //using react-icons
import { useState } from 'react';
import './styling/Search.css';

export const SearchBrewery = ({ setResults }) => {

    const [input, setInput] = useState("");

    const fetchData = (data) => {
        fetch("https://api.openbrewerydb.org/v1/breweries?by_type=micro&per_page=50")
            .then((res) => res.json())
            .then((json) => {
                const searchResult = json.filter((brewery) => {
                    return (
                        data && //empty array when no input
                        brewery &&
                        brewery.name &&
                        brewery.name.toLowerCase().includes(data)
                    );
                });
                setResults(searchResult);
            });
    }
    const changeHandler = (data) => {
        setInput(data);
        fetchData(data);
    }
    return (
        <div className="input-wrapper">
            <div sty>
                <FaSearchengin id="search-icon" />
                <input
                    className='search-bar-input'
                    placeholder='Type here.....'
                    value={input}
                    onChange={(e) => changeHandler(e.target.value)}
                />
            </div>
        </div>
    )
}