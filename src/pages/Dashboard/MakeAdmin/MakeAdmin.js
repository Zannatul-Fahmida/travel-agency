import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://quiet-ridge-68466.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })
        e.preventDefault();
    }
    return (
        <div className="flex flex-col items-center w-full">
            <h2 className="text-3xl font-bold my-3">Make An Admin</h2>
            <form onSubmit={handleAdminSubmit} className="w-1/3">
                <div>
                    <label htmlFor="admin" className="sr-only">
                        Admin
                    </label>
                    <input
                        id="admin"
                        name="admin"
                        type="email"
                        autoComplete="admin"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-3"
                        placeholder="Enter the email"
                        onBlur={handleOnBlur}
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Make Admin
                    </button>
                </div>
                {success && <div className="bg-green-100 rounded-lg py-5 px-6 mt-3 text-base text-green-700" role="alert">Make an admin successfully!</div>}
            </form>
        </div>
    );
};

export default MakeAdmin;