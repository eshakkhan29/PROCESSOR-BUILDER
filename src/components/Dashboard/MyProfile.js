import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useProfileInfo from '../hook/useProfileInfo';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [open, setOpen] = useState(false);
    const { displayName, email } = user;
    const [userInfo, refetch, setRefetch] = useProfileInfo(email);
    const { education, location, phone, fblink, linkedin } = userInfo;

    const updateProfile = event => {
        event.preventDefault();
        const education = event.target.education.value;
        const location = event.target.location.value;
        const phone = event.target.phone.value;
        const fblink = event.target.facebook.value;
        const linkedin = event.target.linkedin.value;
        const userData = { email, education, location, phone, fblink, linkedin }
        
        fetch("http://localhost:5000/users", {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success('profile info update success')
                    setOpen(false)
                    setRefetch(!refetch)
                }
            })
        event.target.reset();
    }
    return (
        <div>
            <h1 className='text-success'>My profile</h1>
            <p>Name: {displayName}</p>
            <p>Email: {email}</p>
            <p>Education: {education}</p>
            <p>Location: {location}</p>
            <p>Phone: {phone}</p>
            <p>Facebook Link: {fblink}</p>
            <p>linkedin Link: {linkedin}</p>

            <button className='btn btn-primary' onClick={() => setOpen(true)}>Update Profile</button>
            <div>
                {open &&
                    <>
                        <Form onSubmit={updateProfile}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Education</Form.Label>
                                <Form.Control required name='education' type="text" placeholder="education" />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Location</Form.Label>
                                <Form.Control required name='location' type="text" placeholder="Location" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Phone</Form.Label>
                                <Form.Control required name='phone' type="number" placeholder="Phone" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Facebook</Form.Label>
                                <Form.Control required name='facebook' type="text" placeholder="facebook link" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Linkedin</Form.Label>
                                <Form.Control required name='linkedin' type="text" placeholder="Linkedin link" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Save
                            </Button>
                        </Form>
                    </>
                }
            </div>
        </div>
    );
};

export default MyProfile;