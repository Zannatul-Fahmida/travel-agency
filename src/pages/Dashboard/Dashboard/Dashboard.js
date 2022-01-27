import { faCaretSquareDown, faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Dashboard = () => {
    const { user, admin, logOut } = useAuth();
    const [active, setActive] = useState("dashboard");
    return (
        <div className="flex">
            <div className="hidden md:block h-full p-3 space-y-2 w-60 bg-white text-gray-800">
                <div className="flex items-center p-2 space-x-4">
                    <img
                        src={user.photoURL || 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'}
                        alt=""
                        className="w-12 h-12 rounded-full"
                    />
                    <div>
                        <h2 className="text-sm font-semibold">{user.displayName}</h2>
                        <span className="flex items-center space-x-1">
                            <Link to="/viewProfile" className="text-xs hover:underline text-gray-600"
                            >View profile</Link>
                        </span>
                    </div>
                </div>
                <div className="divide-y divide-gray-300">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        <li onClick={() => setActive("dashboard")} className={active === "dashboard" ? "bg-gray-100 text-gray-900" : ""}>
                            <Link to="/dashboard" className="flex items-center p-2 space-x-3 rounded-md">
                                <FontAwesomeIcon icon={faCaretSquareDown} />
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li onClick={() => setActive("addBlogs")} className={active === "addBlogs" ? "bg-gray-100 text-gray-900" : ""}>
                            <Link to="/dashboard/addBlogs" className="flex items-center p-2 space-x-3 rounded-md">
                                <FontAwesomeIcon icon={faPlusSquare} />
                                <span>Add Blogs</span>
                            </Link>
                        </li>
                        {
                            admin && <>
                                <li onClick={() => setActive("addArticles")} className={active === "addArticles" ? "bg-gray-100 text-gray-900" : ""}>
                                    <Link to="/dashboard/addArticles" className="flex items-center p-2 space-x-3 rounded-md">
                                        <FontAwesomeIcon icon={faPlus} />
                                        <span>Add Articles</span>
                                    </Link>
                                </li>
                                <li onClick={() => setActive("makeAdmin")} className={active === "makeAdmin" ? "bg-gray-100 text-gray-900" : ""}>
                                    <Link to="/dashboard/makeAdmin" className="flex items-center p-2 space-x-3 rounded-md">
                                        <FontAwesomeIcon icon={faUserPlus} />
                                        <span>Make Admin</span>
                                    </Link>
                                </li>
                            </>
                        }
                    </ul>
                    <ul className="pt-4 pb-2 space-y-1 text-sm">
                        <li>
                            <button onClick={logOut} className="flex items-center p-2 space-x-3 rounded-md">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-5 h-5 fill-current text-gray-600"
                                >
                                    <path
                                        d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"
                                    ></path>
                                    <rect width="32" height="64" x="256" y="232"></rect>
                                </svg>
                                <span>Logout</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default Dashboard;