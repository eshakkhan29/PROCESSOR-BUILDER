import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddAReview = () => {
    const [user] = useAuthState(auth);
    const addReview = event => {
        event.preventDefault();
        const name = user?.displayName;
        const body = event.target.review.value;
        const rating = event.target.rating.value;
        if (rating <= 0 || rating > 5) {
            return toast.error('your rating value must be 1 to 5')
        }
        const reviewData = { name, body, rating }
        fetch('https://desolate-sands-37810.herokuapp.com/review', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        event.target.reset();
    }
    return (
        <div>
            <h1 className='my-3'>Add A <span className='text-success'>Review</span></h1>
            <div>
                <Form onSubmit={addReview}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Your Review</Form.Label>
                        <Form.Control required name='review' as='textarea' type="text" placeholder="say something about this company" />

                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Rating</Form.Label>
                        <Form.Control required name='rating' type="text" placeholder="rating" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Add review
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default AddAReview;