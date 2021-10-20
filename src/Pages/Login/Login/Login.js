import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const { user, error, signInUsingGoogle, registerWithEmailPass, loginWithEmailPass } = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const handleRegister = () => {
        registerWithEmailPass(email, password)
    }

    const handleLogin = () => {
        loginWithEmailPass(email, password)
    }
    return (
        <div className="d-flex justify-content-center my-5">
            <div className="row">
                <div className="con-md-6">
                    <input onBlur={handleEmail} className='pe-5 mb-3' type="email" placeholder="Email" />
                    <br />
                    <input onBlur={handlePassword} className='pe-5 mb-3' type="password" placeholder="Password" />
                    <br />
                    <div className="text-center mb-5">
                        <button onClick={handleLogin} className="btn btn-primary me-2">Login</button>
                        <button onClick={handleRegister} className="btn btn-success">Rigister</button>
                    </div>
                    <div className="text-center">
                        <button onClick={signInUsingGoogle} className="btn btn-primary">Sign-in With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;