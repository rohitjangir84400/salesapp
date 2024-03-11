import LoginForm from "../components/loginform";
function Login() {
    return (
        /* Login screen layout */
        <div className=" px-10 md:px-20 py-10">
            <div className="text-[30px] font-bold text-center p-5">
                Login
            </div>
            <div>
                <LoginForm />
            </div>
        </div>
    );
}

export default Login;