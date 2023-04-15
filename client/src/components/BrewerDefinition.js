import './styling/Home.css'

export function BrewerDefinition() {
    return (
        <div className="brewer-definition">
            <h1>Craft Brewer Definition</h1>
            <h3>
                An American craft brewer is a small and independent brewer.
            </h3>
            <h4>Small</h4>
            <p>Annual production of 6 million barrels of beer or less
                (approximately 3 percent of U.S. annual sales).
                Beer production is attributed to a brewer according to rules of alternating proprietorships.</p>
            <h4>Independent</h4>
            <p>Less than 25 percent of the craft brewery is owned or controlled
                (or equivalent economic interest)
                by a beverage alcohol industry member that is not itself a craft brewer.</p>
            <div>
                <span>Reference: </span>
                <a href='https://www.brewersassociation.org/statistics-and-data/craft-brewer-definition/'>https://www.brewersassociation.org/statistics-and-data/craft-brewer-definition</a>
            </div>
        </div>
    )
}