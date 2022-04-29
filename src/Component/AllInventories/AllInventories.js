import React from 'react';
import { BsTrash } from 'react-icons/bs';

const AllInventories = ({perfume}) => {
    const { name, img, price, stock } = perfume;

    return (
            <div className='w-[450px] mx-auto border mb-4'>
                <div className='flex items-center gap-8 p-2 relative'>
                    <img className='w-[50px]' src={img} alt="" />
                    <div className='flex  items-center '>
                        <div>
                            <p>{name}</p>
                            <p>Price:- ${price}</p>
                            <p>Stock:- {stock}</p>
                        </div>
                        <div className='absolute right-4 '>
                            <button className='flex items-center justify-center h-[35px] bg-red-200 w-[35px] rounded-full text-red-600'><BsTrash className='text-xl'/></button>
                        </div>
                    </div>
                </div>
            </div>
    )
};

export default AllInventories;