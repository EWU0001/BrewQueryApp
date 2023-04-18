import { MDBInput, MDBCol, MDBRow, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';
import '../components/styling/LogIn.css'
import { useState } from 'react';

export function LogIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className='form-page'>
            <form className='form'>
                <h3>Sign In</h3>
                <MDBInput className='mb-4' type='email' id='email' label='Email address' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <MDBInput className='mb-4' type='password' id='password' label='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />

                <MDBRow className='mb-4'>
                    <MDBCol className='d-flex justify-content-center'>
                        <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked />
                    </MDBCol>
                    <MDBCol>
                        <a href='#!'>Forgot password?</a>
                    </MDBCol>
                </MDBRow>

                <MDBBtn type='submit' className='mb-4' block onSubmit={(e) => { e.preventDefault(); }} href='!#'>
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