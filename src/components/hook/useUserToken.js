import { useEffect, useState } from 'react';

const useUserToken = (user) => {
    const [token, setToken] = useState('');
    const name = user?.user?.displayName;
    const email = user?.user?.email;
    useEffect(() => {
        const newUserData = { displayName: name, email: email }
        const getToken = async () => {
            if (user) {
                fetch(`https://desolate-sands-37810.herokuapp.com/login`, {
                    method: "PUT",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUserData)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.result.acknowledged === true) {
                            setToken(data.token);
                            localStorage.setItem('accessToken', data.token);
                        }
                    })
            }
        }
        getToken();
    }, [user,email,name]);

    return [token, setToken];
};

export default useUserToken;