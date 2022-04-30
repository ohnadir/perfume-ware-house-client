import React from 'react';
import { Link } from 'react-router-dom';

const HomeInventory = ({perfume}) => {
    const { name, img, price, stock, _id } = perfume;
    return (
        <div>
            <div className='shadow-xl w-[296px] mx-auto p-2 text-center'>
                <img className='mx-auto' src={img} alt="" />
                <p>{name}</p>
                <p>Price:- ${price}</p>
                <p>Stock:- {stock}</p>
                <Link to={`/inventory/${_id}`}>
                <button className='bg-cyan-600 px-16 text-white py-[4px] my-2'>Update</button>
                </Link>
            </div>
        </div>
    );
};

export default HomeInventory;