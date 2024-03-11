import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gettopsales } from "../redux/actions/salesAction";
function Topsalesdata() {
    const dispatch = useDispatch();
    useEffect(() => {
        /* dispatch action to get topsales */
        dispatch(gettopsales());
    }, [dispatch]);

    /* get topsales data from state */
    const data = useSelector((state) => state.sales.salesdata);

    return (
        /* table for top 5 sales UI */
        <div className="flex justify-center md:shadow-lg pb-10">
            <table className=" table-auto">
                <thead>
                    <tr className="border-b-2 border-b-black">
                        <th className="p-1 sm:px-3 md:px-6 py-3">#</th>
                        <th className="p-1 sm:px-3 md:px-6 py-3">Sale Id:</th>
                        <th className="p-1 sm:px-3 md:px-8 py-3">Product Name</th>
                        <th className="p-1 sm:px-3 md:px-6 py-3">Quantity</th>
                        <th className="p-1 sm:px-3 md:px-6 py-3">Sale Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((sale, index) => (
                        <tr className="border-b border-b-slate-500" key={index}>
                            <td className="p-1 sm:px-3 md:px-6 py-4 text-black">{index + 1}</td>
                            <td className="p-1 sm:px-3 md:px-6 py-4 text-gray-500">{sale._id}</td>
                            <td className="p-1 sm:px-3 md:px-8 py-4 text-gray-500">{sale.productname}</td>
                            <td className="p-1 sm:px-3 md:px-6 py-4 text-gray-500">{sale.quantity}</td>
                            <td className="p-1 sm:px-3 md:px-6 py-4 text-gray-500">{sale.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Topsalesdata;