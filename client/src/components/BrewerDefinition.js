import './styling/Home.css'

export function BrewerDefinition() {
    return (
        <div className="brewer-definition">
            <h1 className='def-h1'><span>Craft Brewer Definition</span></h1>
            <h4 className='def-h4'>
                <span>
                    An American craft brewer is a small and independent brewer.
                </span>
            </h4>
            <h4 className='def-h4'><span>Small</span></h4>
            <p className='def-p'><span>Annual production of 6 million barrels of beer or less
                (approximately 3 percent of U.S. annual sales).Beer production is attributed to a brewer according to rules of alternating proprietorships.</span></p>
            <h4 className='def-h4'><span>Independent</span></h4>
            <p className='def-p'><span>Less than 25 percent of the craft brewery is owned or controlled
                (or equivalent economic interest)
                by a beverage alcohol industry member that is not itself a craft brewer.</span></p>
            <div>
                <small>Reference: </small>
                <a href='https://www.brewersassociation.org/statistics-and-data/craft-brewer-definition/'>https://www.brewersassociation.org/statistics-and-data/craft-brewer-definition</a>
            </div>
        </div>
    )
}