import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import auth from '../firebase.init';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {
    const [user] = useAuthState(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, user1] = useSignInWithGoogle(auth);
    if (user) {
        const url = 'http://localhost:5000/login';
        fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            email: user.email
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
            .then((data) => {
                console.log(data)
                localStorage.setItem('accessToken', data.token)
                navigate('/home');
            });
        
    } 


    if (user1) {
        navigate('/home');
    }

    // handle Email
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    // handle Password
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleLogin = () => {
        signInWithEmailAndPassword(email, password);
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }
    return (
        <div>
            <div className='flex justify-center items-center h-[92vh]'>
                <div className='w-[500px] shadow-xl p-4 '>
                    <form onSubmit={(e)=>e.preventDefault()}>
                        <h1 className='text-center text-xl mb-8 text-slate-400'>Log In</h1>
                        <div className='mb-8'>
                            <input onChange={handleEmail}  className='w-full px-2 py-[5px] bg-gray-100 border-0' placeholder='Email' type="email" name="email" id="" />
                        </div>
                        <div className='mb-8'>
                            <input onChange={handlePassword} className='w-full px-2 py-[5px] bg-gray-100 border-0' placeholder='Password' type="password" name="" id="" />
                        </div>
                        <button onClick={handleLogin} className='w-full bg-cyan-600 py-2 text-white' type='submit'>Login</button>
                        <p className='text-sm text-right'>Create an Account ! <span><Link className='text-cyan-600' to='/signup'>Sign up</Link></span></p>
                        <div className='my-8 flex justify-between items-center'>
                            <span className='w-[186px]'><hr /></span>
                            <span className='text-slate-400'>or</span>
                            <span className='w-[186px]'><hr /></span>
                        </div>
                        <button onClick={handleGoogleSignIn} className='border w-full flex items-center justify-around p-1'><FcGoogle className='text-4xl' /><span className='text-lg'>Continue with google</span></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;