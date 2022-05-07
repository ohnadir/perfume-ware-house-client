import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeInventory from '../HomeInventory/HomeInventory';
import usePerfumes from '../Hooks/usePerfumes';
import Review from '../Review/Review';
import Slider from '../Slider/Slider';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    const [perfumes] = usePerfumes();
    const navigate = useNavigate();
    const handleManageInventories = () => {
        navigate('/inventories');
    }
    return (
        <div>
            <Slider></Slider>
            {/* inventory */}
            <div>
                <div className='my-16'>
                    <h2 className='text-center mb-8 font-bold text-2xl'>Inventory</h2>

                    <div className='max-w-7xl mx-auto'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                            {
                                perfumes.slice(0, 6).map(perfume => <HomeInventory
                                    key={perfume._id}
                                    perfume={perfume}
                                ></HomeInventory>)
                            }
                        </div>
                        <div className='flex justify-center mt-10'>
                            <button onClick={handleManageInventories} className='bg-red-600 text-white px-2 py-[4px]'>Manage Inventories</button>
                        </div>
                   </div>
                </div>
            </div>
            
            {/* Testimonial */}
            <div>
                <div className='bg-[#e5eff4]'>
                        <Testimonial></Testimonial>
                </div>
            </div>
        </div>
    );
};

export default Home;