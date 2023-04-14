import { ListOfResults } from './ListOfResults';
import './styling/Search.css';

export const SearchBreweryResults = ({ results }) => {
    return (
        <div className="results">
            {
                results.map((results, id) => {
                    return <ListOfResults results={results} key={id} />
                })
            }
        </div>
    )
}
