import '../components/styling/Footer.css'
import { CDBBox, CDBBtn, CDBIcon, CDBContainer } from 'cdbreact';

export function Footer() {
    return (
        <div className="footer">
            <CDBContainer className="shadow">
                <CDBBox
                    display="flex"
                    justifyContent="between"
                    alignItems="center"
                >
                    <CDBBox>
                        <a href="/" className="d-flex align-items-center p-0 text-dark">
                            {/* img from https://cdn.craftbeer.com/wp-content/uploads/20201218151926/Support-Your-Local-Brewery.png */}
                            <img
                                alt="logo1"
                                src="%PUBLIC_URL%/../img/Support-Local-Brewery.png"
                                width="100px"
                            />
                        </a>
                    </CDBBox>
                    <CDBBox display="flex" alignItems="center">
                        <a href="/" className="d-flex align-items-center p-0 text-dark">
                            <img
                                alt="logo2"
                                src="%PUBLIC_URL%/../img/beerqueryicon.png"
                                width="50px"
                            />
                        </a>
                        <small className="ms-2">&copy; BrewQuery, 2023. All rights reserved.</small>
                    </CDBBox>
                    <CDBBox display="flex" >
                        <CDBBtn flat color="light" className="p-2">
                            <CDBIcon fab icon="facebook-f" />
                        </CDBBtn>
                        <CDBBtn flat color="light" className="mx-3 p-2">
                            <CDBIcon fab icon="twitter" />
                        </CDBBtn>
                        <CDBBtn flat color="light" className="p-2">
                            <CDBIcon fab icon="instagram" />
                        </CDBBtn>
                    </CDBBox>
                </CDBBox>
            </CDBContainer>
        </div >
    )
}