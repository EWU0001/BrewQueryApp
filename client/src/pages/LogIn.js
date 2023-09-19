import { MDBInput, MDBCol, MDBRow, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';
import '../components/styling/LogIn.css'
import { useState } from 'react';
import validator from "validator"
import { useNavigate } from 'react-router-dom';


export function LogIn() {

    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const validateEmail = (e) => {
        const email = e.target.value;
        const message = validator.isEmail(email) ? "email is valid" : "please enter a valid email address";
        setMessage(message);
    }
    const history = useNavigate();
    const registerClick = () => {
        history('/BrewQueryApp/register');
    }

    return (
        <div className='form-page'>
                <h3>Sign In</h3>
            <form className='form'>
                <span data-cyc="message" style={{ fontWeight: "bold", color: "red" }}>{message}</span>
                <MDBInput data-cy="emailInput" className='mb-4' type='email' id='email' label='Email address' onChange={(e) => validateEmail(e)} />
                <MDBInput className='mb-4' type='password' id='password' label='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />

                <MDBRow className='mb-4'>
                    <MDBCol className='d-flex justify-content-center'>
                        <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked />
                    </MDBCol>
                    <MDBCol>
                        <a href='#!'>Forgot password?</a>
                    </MDBCol>
                </MDBRow>

                <MDBBtn type='submit' className='mb-4' block onSubmit={(e) => { e.preventDefault(); }} href='/BrewQueryApp/logIn'>
                    Sign in
                </MDBBtn>

                <div className='text-center'>
                    <p>
                        Not a member? <p data-cy="register" style={{color:'blue', cursor:'pointer'}} onClick={registerClick}>Register</p>
                    </p>
                </div>
            </form>
        </div>
    );
}