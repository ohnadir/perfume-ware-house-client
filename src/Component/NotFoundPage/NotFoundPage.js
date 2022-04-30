import React from 'react';
import photo from '../../images/404-error-page-not-found.jpg'

const NotFoundPage = () => {
    return (
        <div className='flex justify-center items-center h-[75.6vh]'>
            <div>
                <img className='w-[600px]' src={photo} alt="" />
            </div>
        </div>
    );
};

export default NotFoundPage;