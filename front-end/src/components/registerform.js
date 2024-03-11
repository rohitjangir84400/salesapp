import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from '../redux/actions/authAction';
import { useNavigate } from "react-router-dom";

function RegisterForm() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authError = useSelector((state) => state.auth.message);

    const [fullName, setfullName] = useState('');
    const [userName, setuserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleregister = () => {
        const userData = { fullName, userName, email, password };
        /* dispatch action when user submit form data to register */
        dispatch(register(userData));
        alert(authError);
        navigate('/login');
    }


    return (
        /* registration form UI */
        <div className="flex flex-col items-center gap-y-5 px-3 shadow-2xl py-5">
            <div className="flex items-center border-b border-black w-full  md:w-[50%] py-2">
                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" name="Full Name" id="fullname" type="text" placeholder="Full Name" value={fullName} onChange={(e) => setfullName(e.target.value)} />
            </div>
            <div className="flex items-center border-b border-black w-full  md:w-[50%] py-2">
                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" name="User Name" id="username" type="text" placeholder="User Name" value={userName} onChange={(e) => setuserName(e.target.value)} />
            </div>
            <div className="flex items-center border-b border-black w-full  md:w-[50%] py-2">
                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" name="Email" id="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="flex items-center border-b border-black w-full  md:w-[50%] py-2">
                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" name='Password' id="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className=" w-full md:w-[50%] flex justify-center">
                <button className=" px-5 py-3 bg-black text-white border hover:bg-white hover:text-black hover:border-black" onClick={handleregister}>Register</button>
            </div>
        </div>
    );
}

export default RegisterForm;