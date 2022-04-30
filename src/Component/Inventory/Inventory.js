import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [number, setNumber] = useState('');
    const { name, img, price, stock } = product;
    useEffect(() => {
        const url = `http://localhost:5000/perfume/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [id]);
    const handleNumber = (event) => {
        setNumber(event.target.value);
    }

    let count = parseInt(stock);
    // function for reduce number 
    const updateStock = () => {
        return count--;
    }
 
    const handleDelivered = (newStock) => {
        const stock = updateStock();
        const url = `http://localhost:5000/perfume/${id}`;
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({stock:stock}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
        .then(res=> res.json())
            .then(data => {
                console.log(data)
            });
    }

    const handleRestock = (stocks) => {
        let count = parseInt(stocks);
        const stock = parseInt(number) + count;
        const url = `http://localhost:5000/perfume/${id}`;
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({stock:stock}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
        .then(res=> res.json())
        .then(data => {
             console.log(data)
        });
    }
    return (
        <div>
            <div className='flex justify-center items-center py-20'>
                <div className='text-center w-[300px] border p-2'>
                    <img className='w-[200px] mx-auto' src={img} alt="" />
                    <p>{name}</p>
                    <p>Price:- <span className='font-bold text-lg'>${price}</span></p>
                    <p>Stock:- {stock}</p>
                    <button onClick={()=>handleDelivered(stock)} className='bg-cyan-600 text-white px-1 py-[3px] rounded'>Delivered</button>
                    <div className='my-4'>
                        <form onSubmit={(e)=>e.preventDefault()}>
                            <div className='flex mx-auto'>
                                <input onChange={handleNumber} className='px-2 py-2 bg-slate-100 outline-none' type="number" name="number" id="" placeholder='Enter Amount' />
                                <button onClick={()=>handleRestock(stock)} type="button" data-mdb-ripple="true" data-mdb-ripple-color="light"
                                    className="inline-block px-2 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase  shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                >Restock</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;