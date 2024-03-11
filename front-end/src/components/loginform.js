import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { login } from '../redux/actions/authAction';
import { useNavigate } from 'react-router-dom';
function LoginForm() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlelogin = (e) => {
        e.preventDefault();
        const userData = { email, password };
        /* dispatch action when user click login */
        dispatch(login(userData));
        navigate('/profile');
    }

    return (
        /* Login form UI */
        <div className="flex flex-col items-center gap-y-5 px-3 shadow-2xl py-5">
            <div className="flex items-center border-b border-black w-full  md:w-[50%] py-2">
                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" name="Loginemail" id="loginmail" type="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="flex items-center border-b border-black w-full  md:w-[50%] py-2">
                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" name="Loginpass" id="loginpass" type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className=" w-full md:w-[50%] flex justify-center">
                <button className=" px-5 py-3 bg-black text-white border hover:bg-white hover:text-black hover:border-black" onClick={handlelogin}>Login</button>
            </div>
        </div>
    );
}

export default LoginForm;