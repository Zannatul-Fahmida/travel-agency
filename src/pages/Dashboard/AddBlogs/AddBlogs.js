import React, { useRef, useState } from 'react';

const AddBlogs = () => {
    const titleRef = useRef();
    const imgRef = useRef();
    const descriptionRef = useRef();
    const dateRef = useRef();
    const timeRef = useRef();
    const locationRef = useRef();
    const expenseRef = useRef();
    const ratingRef = useRef();
    const [success, setSuccess] = useState(false);

    const handleAddBlog = e => {
        const title = titleRef.current.value;
        const img = imgRef.current.value;
        const description = descriptionRef.current.value;
        const expense = expenseRef.current.value;
        const location = locationRef.current.value;
        const rating = ratingRef.current.value;
        const date = dateRef.current.value;
        const time = timeRef.current.value;
        const newBlog = { title, img, description, expense, date, time, rating, location };

        fetch('https://quiet-ridge-68466.herokuapp.com/addBlogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBlog)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true);
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <div className="flex flex-col items-center w-full">
            <h2 className="text-3xl font-bold my-3">Add Blogs</h2>
            <form onSubmit={handleAddBlog} className="w-1/3">
                <div>
                    <label htmlFor="title" className="sr-only">
                        Title
                    </label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        autoComplete="title"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-3"
                        placeholder="Enter the title"
                        ref={titleRef}
                    />
                </div>
                <div>
                    <label htmlFor="img" className="sr-only">
                        Image
                    </label>
                    <input
                        id="img"
                        name="image"
                        type="text"
                        autoComplete="image"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-3"
                        placeholder="Enter the image URL"
                        ref={imgRef}
                    />
                </div>
                <div>
                    <label htmlFor="description" className="sr-only">
                        Description
                    </label>
                    <input
                        id="description"
                        name="description"
                        type="text"
                        autoComplete="description"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-3"
                        placeholder="Enter the description"
                        ref={descriptionRef}
                    />
                </div>
                <div>
                    <label htmlFor="date" className="sr-only">
                        Date
                    </label>
                    <input
                        id="date"
                        name="date"
                        type="date"
                        autoComplete="date"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-3"
                        placeholder="Enter the date"
                        ref={dateRef}
                    />
                </div>
                <div>
                    <label htmlFor="time" className="sr-only">
                        Time
                    </label>
                    <input
                        id="time"
                        name="time"
                        type="time"
                        autoComplete="time"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-3"
                        placeholder="Enter the time"
                        ref={timeRef}
                    />
                </div>
                <div>
                    <label htmlFor="location" className="sr-only">
                        Location
                    </label>
                    <input
                        id="location"
                        name="location"
                        type="text"
                        autoComplete="location"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-3"
                        placeholder="Enter the location"
                        ref={locationRef}
                    />
                </div>
                <div>
                    <label htmlFor="expense" className="sr-only">
                        Expense
                    </label>
                    <input
                        id="expense"
                        name="expense"
                        type="text"
                        autoComplete="expense"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-3"
                        placeholder="Enter the expense"
                        ref={expenseRef}
                    />
                </div>
                <div>
                    <label htmlFor="rating" className="sr-only">
                        Rating
                    </label>
                    <input
                        id="rating"
                        name="rating"
                        type="number"
                        autoComplete="rating"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-3"
                        placeholder="Enter the rating"
                        ref={ratingRef}
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Add Blog
                    </button>
                </div>
                {success && <div class="bg-green-100 rounded-lg py-5 px-6 mb-4 text-base text-green-700 mb-3" role="alert">Add a new blog successfully!</div>}
            </form>
        </div>
    );
};

export default AddBlogs;