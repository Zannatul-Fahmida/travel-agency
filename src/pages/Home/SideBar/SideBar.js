import React from 'react';
import './SideBar.css';

const SideBar = () => {
    return (
        <div className="text-white">
            <div className="sidebar-img-bg1">
                <div className="sidebar-img">
                    <h5 className="text-5xl font-bold mb-1">Los Angeles</h5>
                    <p>Best Place For Travel</p>
                </div>
            </div>
            <div className="sidebar-img-bg2 mt-4">
                <div className="sidebar-img">
                    <h5 className="text-5xl font-bold mb-1">London</h5>
                    <p>Top Rated Place</p>
                </div>
            </div>
            <div className="sidebar-img-bg3 mt-4">
                <div className="sidebar-img">
                    <h5 className="text-5xl font-bold mb-1">Dubai</h5>
                    <p>Most Visited City</p>
                </div>
            </div>
        </div>
    );
};

export default SideBar;