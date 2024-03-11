import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getrevenue } from '../redux/actions/salesAction'


function TotalRevenue() {

    const dispatch = useDispatch();

    useEffect(() => {
        /* dispatch action to get revenue */
        dispatch(getrevenue());
    }, [dispatch]);

    /* get updated revenue from updated state */
    const revenue = useSelector((state) => state.sales.totalrevenue);


    return (
        /* Today's tatal revenue screen layout */
        <div className="font-bold text-center text-[30px] py-10">Today's Revenue Is {revenue}</div>
    );
}

export default TotalRevenue;