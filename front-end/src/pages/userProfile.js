import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserDetails from "../components/userdetails";
import UserSales from "../components/usersales";
import UserRevenue from "../components/userrevenue";
import { userdetails } from "../redux/actions/authAction";
import { getUserSales } from "../redux/actions/salesAction";
import { getuserrevenue } from "../redux/actions/salesAction";

/* user profile screen */
function Profile() {

    const [activeTab, setActiveTab] = useState('userdetails');
    const dispatch = useDispatch();
    /* get values from state */
    const id = useSelector((state) => state.auth.userId);
    const auth = useSelector((state) => state.auth.isAuthenticated);
    const user = useSelector((state) => state.auth.user);
    const usersales = useSelector((state) => state.sales.usersalesdata);
    const userrevenue = useSelector((state) => state.sales.userrevenue);

    useEffect(() => {
        if (auth) {
            /* dispatch actions if auth is true */
            dispatch(userdetails(id));
            dispatch(getUserSales(id));
            dispatch(getuserrevenue(id));
        }
    }, [dispatch, auth]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="flex flex-wrap xl:px-24 px-5 mt-10">
            <div className="flex md:basis-1/4 basis-full md:flex-col md:justify-normal justify-around md:mb-0 mb-5 md:h-[70vh] bg-gray-200 rounded-lg">
                <div className="p-2">
                    <button onClick={() => handleTabChange('userdetails')} className={activeTab === 'userdetails' ? 'w-full py-3 bg-white rounded-lg' : ' w-full py-3'}>
                        <div className="flex justify-center gap-2 items-center p-1">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </div>
                            <div className="sm:block hidden">User Details</div>
                        </div>
                    </button>
                </div>
                <div className="p-2">
                    <button onClick={() => handleTabChange('usersales')} className={activeTab === 'usersales' ? 'w-full py-3 bg-white rounded-lg' : ' w-full py-3'}>
                        <div className="flex justify-center gap-2 items-center p-1">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                                </svg>
                            </div>
                            <div className="sm:block hidden">User Sales</div>
                        </div>
                    </button>
                </div>
                <div className="p-2">
                    <button onClick={() => handleTabChange('userrevenue')} className={activeTab === 'userrevenue' ? 'w-full py-3 bg-white rounded-lg' : ' w-full py-3'}>
                        <div className="flex justify-center gap-2 items-center p-1">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>
                            <div className="sm:block hidden">User Revenue</div>
                        </div>
                    </button>
                </div>
            </div>
            <div className="h-[70vh] md:basis-3/4 basis-full overflow-auto">
                {activeTab === 'userdetails' && (
                    /* passing data to components */
                    <UserDetails userinfo={user} />
                )}

                {activeTab === 'usersales' && (
                    /* passing data to components */
                    <UserSales sales={usersales} />
                )}

                {activeTab === 'userrevenue' && (
                    /* passing data to components */
                    <UserRevenue revenue={userrevenue} />
                )}
            </div>
        </div>
    );
}

export default Profile;