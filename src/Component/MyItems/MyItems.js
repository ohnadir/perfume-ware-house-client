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
            const email = user.email;
            const url = `http://localhost:5000/upload?email=${email}`;
            const { data } = await axios.get(url);
            setProducts(data);
            console.log(products);
        }
        getUploadITem();
    }, [user]);
    return (
        <div>
            <div className='my-16'>
                {
                    products.map(details => <MyItemsDetails
                        key={details._id}
                        details={details}
                    ></MyItemsDetails>)
                }
            </div>
        </div>
    );
};
/* {
    headers: {
        'authorization': `${user.email} ${localStorage.getItem("accessToken")}`
    }
} */
export default MyItems;