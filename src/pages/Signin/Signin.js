import axios from 'axios'
import React from 'react'
import { useContext, useState } from 'react'

import './Signin.css'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider';

const Signin = () => {
    const { setAuth } = useContext(AuthContext)
    const testCredentials = {
        email: "adarshbalika@gmail.com",
        password: "adarshbalika"
    }
    let navigate = useNavigate();
    const signinHandler = async (e) => {

        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/login', { ...testCredentials })
            console.log(response)
            if (response.status === 200 || response.status === 201) {
                localStorage.setItem('token', response.data.encodedToken)
                setAuth(response.data.encodedToken)
                navigate('/')
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <form class="form-container">
                <h5 class="sub-heading">Signin</h5>
                <div class="form-group flex-vt">
                    <label for="email-input" class="form-label form-field-required">Email</label>
                    <input type="email" id="email-input" class="form-control" placeholder="abc@gmail.com" required />
                </div>
                <div class="form-group flex-vt">
                    <label for="password-input" class="form-label form-field-required">Password</label>
                    <input type="password" id="password-input" class="form-control" placeholder="enter password" required />
                </div>
                <h5 class="text forgot-pw-text">Forgot Password?</h5>
                <label class="terms-condt-checkbox"> <input type="checkbox" />Remember me</label>
                <button class="btn btn-primary" onClick={signinHandler}>Submit</button>
                <a href="../signup/signup.html" class="text-link">Create new Account</a>
            </form>
        </>
    )
}

export default Signin