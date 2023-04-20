import './styling/Search.css';
import { useNavigate } from "react-router-dom"


export const ListOfResults = ({ results }) => {

    const navigate = useNavigate();
    return (
        //use Link to navigate 
        <div
            className="result-list"
            onClick={() => navigate(`/BrewQueryApp/breweries/${results.id}`)}
        >{results.name}
        </div>
    )
}
