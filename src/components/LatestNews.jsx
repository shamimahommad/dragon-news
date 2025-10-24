import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee className='flex gap-5' pauseOnHover={true} speed={50}>
                <h2 className='font-bold'>Sectetur adipisicing elit. Odit, velit iste. Commodi sit voluptatibus rerum deserunt? Velit, ea vel fugiat, eum alias, maxime in quibusdam deserunt ut nam a repellat.</h2>
                <h2 className='font-bold'>Sectetur adipisicing elit. Odit, velit iste. Commodi sit voluptatibus rerum deserunt? Velit, ea vel fugiat, eum alias, maxime in quibusdam deserunt ut nam a repellat.</h2>
                <h2 className='font-bold'>Sectetur adipisicing elit. Odit, velit iste. Commodi sit voluptatibus rerum deserunt? Velit, ea vel fugiat, eum alias, maxime in quibusdam deserunt ut nam a repellat.</h2>
            </Marquee>
        </div>
    );
};

export default LatestNews;