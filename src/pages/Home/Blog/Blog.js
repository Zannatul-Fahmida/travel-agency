import React from 'react';
import { Link } from 'react-router-dom';

const Blog = (props) => {
    const { _id, title, description, img } = props.blog;
    return (
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img className="rounded-t-lg" src={img} alt="" />
            </a>
            <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
                <p className="text-gray-700 text-base mb-4">
                    {`${description}`.slice(0, 150)}
                </p>
                
                <Link to={`/blogs/${_id}`} className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read More</Link>
            </div>
        </div>
    );
};

export default Blog;