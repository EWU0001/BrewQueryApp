import '../components/styling/Footer.css'
import { CDBBox, CDBBtn, CDBIcon, CDBContainer } from 'cdbreact';

export function Footer() {
    const beerqueryicon = require("../img/beerqueryicon.png");
    const glowbrewing = require("../img/glowbrewing.png");

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
                            {/* img from https://www.flaticon.com/ */}
                            <img
                                alt="logo1"
                                src={glowbrewing}
                                width="80px"
                                height="70px"
                            />
                        </a>
                    </CDBBox>
                    <CDBBox display="flex" alignItems="center">
                        <a href="#!" className="d-flex align-items-center p-0 text-dark">
                            {/* icon from Bing Ai image generator */}
                            <img
                                alt="logo2"
                                src={beerqueryicon}
                                width="60px"
                            />
                        </a>
                        <small className="ms-2">&copy; BrewQuery, 2023. All rights reserved.</small>
                    </CDBBox>
                    <CDBBox display="flex">
                        <CDBBtn color="light" size='3x' className="p-2" circle outline >
                            <CDBIcon fab spin icon="github" />
                        </CDBBtn>
                        <CDBBtn flat color="light" className="mx-3 p-2" circle outline >
                            <CDBIcon fab spin icon="facebook" />
                        </CDBBtn>
                        <CDBBtn flat color="light" className="p-2" circle outline >
                            <CDBIcon fab spin icon="instagram" />
                        </CDBBtn>
                    </CDBBox>
                </CDBBox>
            </CDBContainer>
        </div >
    )
}