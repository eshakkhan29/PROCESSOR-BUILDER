import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './Login.css';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Login = () => {
    const [signInWithGoogle, googleUser, loading, error] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        signInUser,
        signInLoading,
        signInError,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, reseterror] = useSendPasswordResetEmail(auth);

    const [email, setEmail] = useState('');

    const handelEmail = event => {
        setEmail(event.target.value);
    }

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    // if (loading || signInLoading) {
    //     return <Loading></Loading>
    // }

    if (sending) {
        toast.success('Password reset email send')
    }

    if (signInError || reseterror || error) {
        toast.error(`${signInError ? signInError.message : ''} ${reseterror ? reseterror.message : ''} ${error ? error.message : ''}`);
    }

    if (googleUser || signInUser) {
        navigate(from, { replace: true })
    }

    const handelSubmit = event => {
        const email = event.target.email.value;
        const password = event.target.password.value;
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    const handelForgetPassword = () => {
        if (email) {
            sendPasswordResetEmail(email)
        }
        else {
            toast.error('please type your email')
        }
    }
    return (
        <div className='vh-100'>
            <div className='m-auto from-container mt-5'>
                <h2 className='text-center title text-primary'>Login</h2>
                <Form onSubmit={handelSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required name='email' onBlur={handelEmail} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required name='password' type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <p onClick={handelForgetPassword} className='other-link d-inline-block'>Forget Password?</p>
                    </Form.Group>
                    <Button className='w-100 border-0' variant="primary" type="submit">
                        Login
                    </Button>
                    <p onClick={() => navigate('/signup')} className='mt-4 d-inline-block'>New to dental care? <span className='other-link'>Sign Up</span></p>
                </Form>
                <div className='text-center mt-2'>
                    <div className='or fs-5'>Or</div>
                </div>
                <div className='text-center mt-4'>
                    <button onClick={() => signInWithGoogle()} className='google-button w-100 border-0'>Login With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;