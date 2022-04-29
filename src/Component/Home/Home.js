import React from 'react';
import HomeInventory from '../HomeInventory/HomeInventory';
import usePerfumes from '../Hooks/usePerfumes';
import Review from '../Review/Review';
import Slider from '../Slider/Slider';

const Home = () => {
    const [perfumes] = usePerfumes();
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
                   </div>
                </div>
            </div>
            {/* Customer review */}
            <div className='mb-16'>
                <div className='container mx-auto'>
                    <Review></Review>
                </div>
            </div>
        </div>
    );
};

export default Home;