import { MDBInput, MDBCol, MDBRow, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';
import '../components/styling/LogIn.css'
import { useState } from 'react';
import validator from "validator"

export function LogIn() {

    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const validateEmail = (e) => {
        const email = e.target.value;
        const message = validator.isEmail(email) ? "email is valid" : "please enter a valid email address";
        setMessage(message);
    }


    return (
        <div className='form-page'>
            <form className='form'>
                <h3>Sign In</h3>
                <span style={{ fontWeight: "bold", color: "red" }}>{message}</span>
                <MDBInput className='mb-4' type='email' id='email' label='Email address' onChange={(e) => validateEmail(e)} />
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
                        Not a member? <a href='#!'>Register</a>
                    </p>
                </div>
            </form>
        </div>
    );
}