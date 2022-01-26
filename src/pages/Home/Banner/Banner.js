import React from 'react';
import Carousel from '../Carousel/Carousel';
import SideBar from '../SideBar/SideBar';

const Banner = () => {
    return (
        <div className="container mx-auto columns-3xs">
            <Carousel />
            <SideBar />
        </div>
    );
};

export default Banner;