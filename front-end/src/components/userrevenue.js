
/* render user revenue based on props */
function UserRevenue(props) {

    const revenue = props.revenue.totalRevenue;

    return (
        <div className="md:px-5 h-full overflow-y-auto">
            <div className="bg-gray-200 h-full rounded-lg p-2">
                <div className="text-center">
                    <div className="px-3 py-2 bg-white rounded-lg">User Revenue</div>
                    <div className="px-3 py-2">Rs-{revenue}</div>
                </div>
            </div>
        </div>
    );
}

export default UserRevenue;