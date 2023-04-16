
export function PageNotFound() {
    return (
        <div className='pagenotfound-background' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/404background.png` }} >
            <h3 className='pagenotfound-title'><span>404! Page Not Found!</span></h3>
            <div width={100} height={100}>
            </div>
        </div>
    )
}