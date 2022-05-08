import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeInventory from '../HomeInventory/HomeInventory';
import Footer from '../Footer/Footer';
import usePerfumes from '../Hooks/usePerfumes';
import Slider from '../Slider/Slider';
import Testimonial from '../Testimonial/Testimonial';
import Brand1 from '../../images/brand1.jpg'
import Brand2 from '../../images/brand2.jpg'
import Brand3 from '../../images/brand3.jpg'
import Brand4 from '../../images/brand4.jpg'
import Brand5 from '../../images/brand5.jpg'
import Brand6 from '../../images/brand6.jpg'



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
                            <button onClick={handleManageInventories} className='border-2 text-cyan-600 border-cyan-600 rounded-full text-b px-3 py-[5px]'>Manage Inventories</button>
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
            {/* Top Brand */}
            <div>
                <div className='max-w-7xl mx-auto p-16'>
                    <h1 className='text-3xl text-center mb-8'>Top Brands</h1>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6'>
                        <div className='mx-auto mb-6'>
                            <img className=' w-[80px]' src={Brand1} alt="" />
                            <p className='text-center'>Dossier</p>
                        </div>
                        <div className='mx-auto mb-6'>
                            <img className='w-[80px]' src={Brand2} alt="" />
                            <p className='text-center'>Marc Jacobs</p>
                        </div>
                        <div className='mx-auto'>
                            <img className=' w-[80px]' src={Brand3} alt="" />
                            <p className='text-center'>Burberry</p>
                        </div>
                        <div className='mx-auto mb-6'>
                            <img className='mx-auto w-[80px]' src={Brand4} alt="" />
                            <p className='text-center'>Arianna Grande</p>
                        </div>
                        <div className='mx-auto mb-6'>
                            <img className='mx-auto w-[80px]' src={Brand5} alt="" />
                            <p className='text-center'>Versace</p>
                        </div>
                        <div className='mx-auto'>
                            <img className='mx-auto w-[80px]' src={Brand6} alt="" />
                            <p className='text-center'>Juicy Couture</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            {/* Feedback section */}
            <div>
                <div className='bg-[#e5eff4] p-16 flex justify-center items-center text-center'>
                    <div>
                        <p className='mb-2 text-sm'>We'd love to hear what you think!</p>
                        <button className='rounded-full border border-slate-900 px-4 py-1 hover:border-2'>Give feedback</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;