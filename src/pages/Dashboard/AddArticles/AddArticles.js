import React, { useRef, useState } from 'react';

const AddArticles = () => {
    const titleRef = useRef();
    const imgRef = useRef();
    const descriptionRef = useRef();
    const categoryRef = useRef();
    const locationRef = useRef();
    const expenseRef = useRef();
    const infoRef = useRef();
    const [success, setSuccess] = useState(false);

    const handleAddArticle = e => {
        const title = titleRef.current.value;
        const img = imgRef.current.value;
        const description = descriptionRef.current.value;
        const expense = expenseRef.current.value;
        const location = locationRef.current.value;
        const info = infoRef.current.value;
        const category = categoryRef.current.value;
        const newArticle = { title, img, description, expense, category, info, location };
        fetch('https://quiet-ridge-68466.herokuapp.com/addArticles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newArticle)
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
            <h2 className="text-3xl font-bold my-3">Add Articles</h2>
            <form onSubmit={handleAddArticle} className="md:w-1/3">
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
                    <label htmlFor="info" className="sr-only">
                        Traveller Info
                    </label>
                    <input
                        id="info"
                        name="info"
                        type="text"
                        autoComplete="info"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-3"
                        placeholder="Enter the traveller info"
                        ref={infoRef}
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
                    <label htmlFor="category" className="sr-only">
                        Category
                    </label>
                    <input
                        id="category"
                        name="category"
                        type="text"
                        autoComplete="category"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-3"
                        placeholder="Enter the category"
                        ref={categoryRef}
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
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Add Article
                    </button>
                </div>
                {success && <div className="bg-green-100 rounded-lg py-5 px-6 text-base text-green-700" role="alert">Add a new article successfully!</div>}
            </form>
        </div>
    );
};

export default AddArticles;