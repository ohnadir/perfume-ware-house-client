import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import MyItemsDetails from '../MyItemsDetails/MyItemsDetails';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const getUploadITem = async () => {
            const email = user?.email;
            const url = `https://ancient-bayou-60727.herokuapp.com/upload?email=${email}`;
            const { data } = await axios.get(url);
            setProducts(data);
        }
        getUploadITem();
    }, [products]);

    const handleDeleteItem = (id) => {
        const proceed = window.confirm('Are you Sure');
        if (proceed) {
            const url = `https://ancient-bayou-60727.herokuapp.com/upload/${id}`
            fetch(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
                .then(data => {
                    const remaining = products.filter(item => item._id !== id);
                    setProducts(remaining);
            })
        }
    }
    return (
        <div>
            <div className='my-16'>
                {
                    products.map(details => <MyItemsDetails
                        key={details._id}
                        details={details}
                        handleDeleteItem={handleDeleteItem}
                    ></MyItemsDetails>)
                }
            </div>
        </div>
    );
};

export default MyItems;