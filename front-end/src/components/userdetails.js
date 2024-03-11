
/* render user details based on props */
function UserDetails(props) {
    const user = props.userinfo;
    return (
        <div className="md:px-5 h-full">
            <div className="bg-gray-200 h-full rounded-lg p-2">
                <div>
                    <div className="px-3 py-2 bg-white rounded-lg">Full Name</div>
                    <div className="px-3 py-2">{user.fullname}</div>
                </div>
                <div>
                    <div className="px-3 py-2 bg-white rounded-lg">User Name</div>
                    <div className="px-3 py-2">{user.username}</div>
                </div>
                <div>
                    <div className="px-3 py-2 bg-white rounded-lg">Email</div>
                    <div className="px-3 py-2">{user.email}</div>
                </div>
            </div>
        </div>
    );
}

export default UserDetails;