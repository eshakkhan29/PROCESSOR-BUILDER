import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Signup = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        createUser,
        createLoading,
        createError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [check, setCheck] = useState(Boolean);

    const handelCheck = event => {
        setCheck(event.target.checked);
    }

    // if (createLoading || updating || googleLoading) {
    //     return <Loading></Loading>
    // }

    if (createError || updateError || googleError) {
        toast.error(`${createError ? createError.message : ''} ${updateError ? updateError?.message : ''} ${googleError ? googleError?.message : ''}`);
    }
    if (googleUser || createUser) {
        navigate('/home')
    }

    const handelSubmit = async event => {
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        console.log(name, email, password, confirmPassword);
        event.preventDefault();
        if (password !== confirmPassword) {
            return setError('Password not match');
        }
        if (password.length < 7) {
            return setError('Password minimum characters 7');
        }
        else {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name });
            setError('');
        }
    }
    return (
        <div className='vh-100'>
            <div className='m-auto from-container mt-5'>
                <h2 className='text-center title text-primary'>Sign Up</h2>
                <Form onSubmit={handelSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name='name' required type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' required type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' required type="password" placeholder="Password" />
                        {error &&
                            <Form.Text className="text-danger">
                                {error}
                            </Form.Text>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control name='confirmPassword' required type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={handelCheck} type="checkbox" label="Agree Trams and Condition" />
                    </Form.Group>
                    <Button disabled={!check} className='w-100 border-0' variant="primary" type="submit">
                        Sign Up
                    </Button>
                    <p onClick={() => navigate('/login')} className='mt-4 d-inline-block'>Already have an Account? <span className='other-link'>Login</span></p>
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

export default Signup;