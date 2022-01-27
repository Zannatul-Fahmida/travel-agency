import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";

const BlogDetails = () => {
    const { blogId } = useParams();
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        fetch(`https://quiet-ridge-68466.herokuapp.com/blogs/${blogId}`)
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [blogId]);
    return (
        <div className="flex flex-col items-center px-20 my-4">
            <img className="md:w-1/2" src={blog.img} alt="" />
            <h3 className="text-5xl font-bold my-4">{blog.title}</h3>
            <ReactStars
                count={5}
                value={blog.rating}
                size={30}
                edit={false}
                activeColor="#ffd700"
            />
            <div className="flex justify-between w-full">
                <p>{blog.date}</p>
                <p>{blog.time}</p>
            </div>
            <div className="flex justify-between w-full items-center mb-2">
                <p>{blog.location}</p>
                <p>{blog.expense}</p>
            </div>
            <p>{blog.description}</p>
        </div>
    );
};

export default BlogDetails;