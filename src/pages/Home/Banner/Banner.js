import React from 'react';
import Carousel from '../Carousel/Carousel';
import SideBar from '../SideBar/SideBar';

const Banner = () => {
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 px-8 py-4">
            <div className="col-span-2 mb-4 md:mb-0 md:mr-4">
                <Carousel />
            </div>
            <div className="col-span-1">
                <SideBar />
            </div>
        </div>
    );
};

export default Banner;