import RegisterForm from "../components/registerform";
function Register() {
    return (
        /* Registration screen layout */
        <div className=" px-10 md:px-20 py-10">
            <div className="text-[30px] font-bold text-center p-5">
                Register A New User
            </div>
            <div>
                <RegisterForm />
            </div>
        </div>
    );
}
export default Register;