import React from 'react';

const HomeInventory = ({perfume}) => {
    const { name, img, price, stock } = perfume;
    return (
        <div>
            <div className='shadow-xl w-[296px] mx-auto p-2 text-center'>
                <img className='mx-auto' src={img} alt="" />
                <p>{name}</p>
                <p>Price:- {price}</p>
                <p>Stock:- {stock}</p>
            </div>
        </div>
    );
};

export default HomeInventory;