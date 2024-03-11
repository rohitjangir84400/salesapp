import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../redux/actions/authAction';
import { useNavigate } from 'react-router-dom';

function NavBar() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    /* get auth value from state */
    const auth = useSelector((state) => state.auth.isAuthenticated);

    const handellogout = () => {
        /* dispatch action when user click on logout */
        dispatch(logout());
        navigate('/login');
    }

    /* state to manage the toggle menu button  */
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="bg-black">
            <div>
                <nav>
                    <div className="max-w-7xl mx-auto">
                        <div className="flex mx-auto justify-between w-5/6 ">
                            <div className="flex items-center gap-16 my-7">
                                <div>
                                    <div
                                        className="flex gap-1 font-bold items-center text-white "
                                    >
                                        Sales App
                                    </div>
                                </div>
                                {/* primary */}
                                <div className="hidden lg:flex gap-8 ">
                                    <Link to={'/'} className="text-gray-500 hover:text-white">AddSales</Link>
                                    <Link to={'/topsales'} className="text-gray-500 hover:text-white">TopSales</Link>
                                    <Link to={'/totalrevenue'} className="text-gray-500 hover:text-white">Today's Total Revenue</Link>
                                    <Link to={'/login'} className={auth ? "hidden" : "text-gray-500 hover:text-white"}>Login</Link>
                                    <Link to={'/register'} className={auth ? "hidden" : "text-gray-500 hover:text-white"}>Register</Link>
                                    <Link to={'/profile'} className={auth ? "text-gray-500 hover:text-white" : "hidden"}>Profile</Link>
                                </div>
                                <div>
                                    <button className={auth ? "py-2 px-3 text-gray-500 hover:text-white bg-transparent border border-gray-500 hover:border-white" : "hidden"} onClick={handellogout}>logout</button>
                                </div>
                            </div>
                            {/* secondary */}
                            <div className="flex gap-6">
                                {/* Mobile navigation toggle */}
                                <div className="lg:hidden flex items-center">
                                    <button onClick={() => setToggleMenu(!toggleMenu)}>
                                        {!toggleMenu ?
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                            </svg>
                                            :
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                            </svg>

                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* mobile navigation */}
                    <div
                        className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${!toggleMenu ? "h-0" : "h-[50%]"
                            }`}
                    >
                        <div className="px-8 py-5">
                            <div className="flex flex-col gap-8 font-bold tracking-wider">
                                <Link to={'/'} className="text-gray-700">AddSales</Link>
                                <Link to={'/topsales'} className="text-gray-700">TopSales</Link>
                                <Link to={'/totalrevenue'} className="text-gray-700">TotalRevenue</Link>
                                <Link to={'/login'} className={auth ? "hidden" : "text-gray-500 hover:text-white"}>Login</Link>
                                <Link to={'/register'} className={auth ? "hidden" : "text-gray-500 hover:text-white"}>Register</Link>
                                <Link to={'/profile'} className={auth ? "text-gray-500 hover:text-white" : "hidden"}>Profile</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;