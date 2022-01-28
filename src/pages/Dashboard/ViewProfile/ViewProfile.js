import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const ViewProfile = () => {
    const { user, admin } = useAuth();
    return (
        <div className="flex flex-col items-center justify-center my-10">
            <img className="h-36 w-36 rounded-full" src={user.photoURL || 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'} alt="" />
            <h2 className="text-3xl mt-1 font-bold">{user.displayName}</h2>
            <p className="mt-1">{user.email}</p>
            <p className="font-bold text-gray-600">{admin? 'Admin' : 'User'}</p>
            <Link to="/dashboard" className="mt-3 group relative flex justify-center py-2 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 items-center">Back to Dashboard</Link>
        </div>
    );
};

export default ViewProfile;