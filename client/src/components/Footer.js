import '../components/styling/Footer.css'
import { CDBBox, CDBBtn, CDBIcon, CDBContainer } from 'cdbreact';

export function Footer() {
    const beerqueryicon = require("../img/beerqueryicon.png");
    const SupportLocalBrewery = require("../img/Support-Local-Brewery.png");

    return (
        <div className="footer">
            <CDBContainer className="shadow">
                <CDBBox
                    display="flex"
                    justifyContent="between"
                    alignItems="flex-end"
                >
                    <CDBBox>
                        <a href="#!" className="d-flex align-items-center p-0 text-dark">
                            {/* img from https://cdn.craftbeer.com/wp-content/uploads/20201218151926/Support-Your-Local-Brewery.png */}
                            <img
                                alt="logo1"
                                src={SupportLocalBrewery}
                                width="100px"
                            />
                        </a>
                    </CDBBox>
                    <CDBBox display="flex" alignItems="center">
                        <a href="#!" className="d-flex align-items-center p-0 text-dark">
                            <img
                                alt="logo2"
                                src={beerqueryicon}
                                width="60px"
                            />
                        </a>
                        <small className="ms-2">&copy; BrewQuery, 2023. All rights reserved.</small>
                    </CDBBox>
                    <CDBBox display="flex">
                        <CDBBtn flat color="light" className="p-2">
                            <CDBIcon fab spin icon="github" />
                        </CDBBtn>
                        <CDBBtn flat color="light" className="mx-3 p-2">
                            <CDBIcon fab spin icon="facebook" />
                        </CDBBtn>
                        <CDBBtn flat color="light" className="p-2">
                            <CDBIcon fab spin icon="instagram" />
                        </CDBBtn>
                    </CDBBox>
                </CDBBox>
            </CDBContainer>
        </div >
    )
}