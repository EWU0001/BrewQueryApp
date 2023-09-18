import { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon, 
}
from 'mdb-react-ui-kit';

export function Register() {
    const [formData, setFormData] = useState({
       name:'',
       email:'',
       password:'',
       repeatPassword:'' 
    });
    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        password: '',
        repeatPassword: ''
      });
      const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
      };
      const validateForm = () => {
        let valid = true;
        const newErrors = {
          name: '',
          email: '',
          password: '',
          repeatPassword: ''
        };
    
        // Name validation
        if (formData.name.trim() === '') {
          valid = false;
          newErrors.name = 'Name is required';
        }
    
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          valid = false;
          newErrors.email = 'Invalid email address';
        }
    
        // Password validation
        if (formData.password.length < 6) {
          valid = false;
          newErrors.password = 'Password must be at least 6 characters long';
        }
    
        if (formData.password !== formData.repeatPassword) {
          valid = false;
          newErrors.repeatPassword = 'Passwords do not match';
        }
    
        setFormErrors(newErrors);
        return valid;
      };
      const handleRegister = () => {
        if (validateForm()) {
            console.log('Form is valid, proceed with registration');
        }
      };        

  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px',backgroundColor:'transparent'}}>
        <MDBCardBody style={{color:'white'}}>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register</p>

              {formErrors.name && <div data-cy="error-name" className="text-danger">{formErrors.name}</div>}
              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput 
                    label='Your Name' 
                    id='name' 
                    type='text' 
                    className='w-100'
                    value={formData.name}
                    onChange={handleChange}
                    />
              </div>

                    {formErrors.email && <div data-cy="error-email" className="text-danger">{formErrors.email}</div>}
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput 
                    label='Your Email' 
                    id='email' 
                    type='email'
                    value={formData.email}
                    onChange={handleChange}
                    />
              </div>

            {formErrors.password && <div data-cy="error-password" className="text-danger">{formErrors.password}</div>}
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput 
                    data-cy="password-input"
                    label='Password' 
                    id='password' 
                    type='password'
                    value={formData.password}
                    onChange={handleChange}
                    />
              </div>

            {formErrors.repeatPassword && <div data-cy="error-repeatPassword" className="text-danger">{formErrors.repeatPassword}</div>}
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput 
                    data-cy="repeatPassword-input"
                    label='Repeat your password' 
                    id='repeatPassword' 
                    type='password'
                    value={formData.repeatPassword}
                    onChange={handleChange}
                    />
              </div>                   

              <MDBBtn data-cy="submit" className='mb-4' size='lg' onClick={handleRegister}>Register</MDBBtn>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src={require('../img/padlock.png')} />
              </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}