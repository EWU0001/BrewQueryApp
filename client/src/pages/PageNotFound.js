import image from '../img/404background.png';
// Images created by Bing Ai image generator (2023) 
export function PageNotFound() {
    return (
        <div className='pagenotfound-background' style={{ backgroundImage: `url(${image})` }} >
            <h3 className='pagenotfound-title'><span>404! Page Not Found!</span></h3>
            <div width={100} height={100}>
            </div>
        </div>
    )
}