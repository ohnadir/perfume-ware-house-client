import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const AddItems = () => {
    const [user] = useAuthState(auth);
    const email = user.email;
    const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState('')
    const [img, setImg] = useState('')
    const handleName = event => {
        setName(event.target.value)
    }
    /* const handleEmail = event => {
        setEmail(event.target.value)
    } */
    const handlePrice = event => {
        setPrice(event.target.value)
    }
    const handleStock = event => {
        setStock(event.target.value)
    }
    const handleImg = event => {
        setImg(event.target.value)
    }
    const handleSubmit = (event) => {

        event.preventDefault()
        const url = 'http://localhost:5000/upload';
        fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            name, price, stock, img,email
        }),
        headers: {
            'authorization':`${user.email} ${localStorage.getItem("accessToken")}`,
            'Content-type': 'application/json',
        },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        });

    }
    
    return (
        <div>
            <h2>This is Items </h2>
            <div className='w-[450px] mx-auto border p-4'>
                <form >
                    <input onChange={handleName} className='w-full mb-8 bg-slate-100 px-1 py-[4px]'  type="text" name="name" id="" placeholder='Name' />
                    {/* <input onChange={handleEmail} className='w-full mb-8 bg-slate-100 px-1 py-[4px]'  type="text" name="email" id="" placeholder='Email' /> */}
                    <input onChange={handlePrice} className='w-full mb-8 bg-slate-100 px-1 py-[4px]' type="number" name="price" placeholder='Price' id="" />
                    <input onChange={handleStock} className='w-full mb-8 bg-slate-100 px-1 py-[4px]'  type="number" name="stock" placeholder='Stock'  id=""  />
                    <input onChange={handleImg} className='w-full mb-8 bg-slate-100 px-1 py-[4px]'  type="text" name="Img" placeholder='Img URL'  id=""  />
                    <button onClick={handleSubmit} className='bg-cyan-600' >Upload</button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;