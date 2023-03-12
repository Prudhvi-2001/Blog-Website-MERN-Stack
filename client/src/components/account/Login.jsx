import React, { useState, useEffect, useContext } from 'react';

import { TextField, Box, Button, Typography, styled, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import './login.css'

const StyledButton = styled(Button)`
  
  &:hover {
    background-color: green;
  }
  
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    name: '',
    username: '',
    password: '',
};

const Login = ({ isUserAuthenticated }) => {
    const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, showError] = useState('');
    const [account, toggleAccount] = useState('signup');

    const navigate = useNavigate();
    const { setAccount } = useContext(DataContext);


    useEffect(() => {
        showError(false);
    }, [login])

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const loginUser = async () => {
        let response = await API.userLogin(login);//to check the  details in the database
        if (response.isSuccess) { //if it is
            showError('');

            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
            setAccount({ name: response.data.name, username: response.data.username });
            
            isUserAuthenticated(true)
            setLogin(loginInitialValues);
            navigate('/');
        } else {
            showError('Something went wrong! please try again later');
        }
    }

    const signupUser = async () => {
        let response = await API.userSignup(signup);
        if (response.isSuccess) {
            showError('');
            setSignup(signupInitialValues);
            toggleAccount('login');
        } else {
            showError('Something went wrong! please try again later');
        }
    }

    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }

    return (
        <>
            
                {
                    account === 'login' ?
                    <>
                    <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <div className='form'>
    {error && <Error>{error}</Error>}
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input type="text" value={login.username} onChange={(e) => onValueChange(e)} name='username' id="username" required/>

        <label for="password">Password</label>
        <input  type='password' id="password"  value={login.password} onChange={(e) => onValueChange(e)} name='password' required/>

       <StyledButton variant='contained' size='large' onClick={()=>loginUser()}
       sx={{
        marginTop:'15px',
        width:'100%',
        
       }}
       
       >Log In</StyledButton>
        <p className='createaccount'  onClick={() => toggleSignup()}>Don't have account ?<span className='create'>Create</span></p>

    </div>
   
                    </>
                    
                          
                        :
                        <>
                        <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <div className='form'>
        <h3>SignUp Here</h3>
        <label for="username">Name</label>
        <input type="text" onChange={(e) => onInputChange(e)} name='name' />
        <label for="username">Username</label>
        <input type="text" onChange={(e) => onInputChange(e)} name='username'/>

        <label for="password">Password</label>
        <input type="password"   onChange={(e) => onInputChange(e)} name='password'/>
        <StyledButton variant='contained' size='large' 
       onClick={() => signupUser()}
       sx={{
        marginTop:'10px',
        width:'100%',
        
       }}
       
       >Sign Up</StyledButton>

        <p className='createaccount'  onClick={() => toggleSignup()}>Already have an account ?<span className='create'>Login</span></p>
        
    </div>
                        
                        </>
                        
                }
           
        </>
    )
}

export default Login;