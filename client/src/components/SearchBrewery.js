import { useState } from 'react';
import './styling/Search.css';

export const SearchBrewery = ({ setResults }) => {

    const [input, setInput] = useState("");
    const [error, setError] = useState();

    const notfoundicon = require("../img/notfoundicon.png");
    const errorMessage = () => {
        return (
            <div style={{ paddingTop: "80%" }}><img src={notfoundicon} alt='notfoundicon' height={50} width={50} /><p style={{ color: "red", fontWeight: "bold" }}>Try input again!</p></div>
        );
    };

    const fetchData = (data) => {
        fetch("https://api.openbrewerydb.org/v1/breweries?by_type=micro&per_page=100")
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
                if (searchResult.length === 0) {
                    setError(errorMessage);
                } else {
                    setError("");
                }
                setResults(searchResult);
            });
    }
    const changeHandler = (data) => {
        setInput(data);
        fetchData(data);
    }
    return (
        <div className='search-box'>
            <div>
                <i className='fas fa-search'></i>
                <form name='search-form' tabIndex={0}>
                    <input
                        className='search-bar-input'
                        placeholder='name of brewery'
                        value={input}
                        onChange={(e) => changeHandler(e.target.value)}
                    />
                </form>
            </div>
            <div>
                {error && <div className="error-message">{error}</div>}
            </div>
        </div>
    )
}