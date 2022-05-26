import { async } from '@firebase/util';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useProfileInfo from '../hook/useProfileInfo';
import Loading from '../Shared/Loading/Loading';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [userInfo, setUserInfo] = useState({});
    // const [userInfo] = useProfileInfo(user?.email)
    const location = useLocation();


    const email = user?.email;

    useEffect(() => {
        const getUser = async () => {
            const { data } = await axios.get(`http://localhost:5000/users?email=${email}`)
            if (data) {
                setUserInfo(data);
            }
        }
        getUser();
    }, [email])

    const admin = userInfo?.role;
    console.log(userInfo, email, admin);

    if (loading) {
        return <Loading></Loading>
    }

    // if (admin !== 'admin') {
    //     signOut(auth);
    //     return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    // }
    return children;
};

export default RequireAdmin;