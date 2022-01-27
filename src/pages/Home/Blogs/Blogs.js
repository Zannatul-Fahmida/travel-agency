import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://quiet-ridge-68466.herokuapp.com/blogs')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    })
    return (
        <div className="container mx-auto px-8">
            <h2 className="text-3xl font-bold text-gray-900 my-4">Blogs</h2>
            <div className="grid gap-4 grid-cols-3">
                {
                    blogs.map(blog=><Blog
                    key={blog._id}
                    blog={blog}
                    ></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;