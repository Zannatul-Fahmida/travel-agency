import React from 'react';
import Carousel from '../Carousel/Carousel';
import SideBar from '../SideBar/SideBar';

const Banner = () => {
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-8 py-4">
            <div className="col-span-2">
                <Carousel />
            </div>
            <div>
                <SideBar />
            </div>
        </div>
    );
};

export default Banner;