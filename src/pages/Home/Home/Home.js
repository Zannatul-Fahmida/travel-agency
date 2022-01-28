import React from 'react';
import Articles from '../Articles/Articles';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner />
            <Blogs />
            <Articles />
            <Footer />
        </div>
    );
};

export default Home;