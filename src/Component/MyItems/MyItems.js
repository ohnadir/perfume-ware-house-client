import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/upload'
        fetch(url, {
            headers: {
                'authorization': `${user.email} ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [user.email]);
    return (
        <div>
            <h2>This is My Items{products.length}</h2>
        </div>
    );
};
/* {
    headers: {
        'authorization': `${user.email} ${localStorage.getItem("accessToken")}`
    }
} */
export default MyItems;