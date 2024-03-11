import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addSale } from "../redux/actions/salesAction";
import { useNavigate } from "react-router-dom";


function AddSalesForm() {

    const [productname, setproductName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [amount, setAmount] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    /* get vaues from state */
    const error = useSelector((state) => state.sales.error);
    const auth = useSelector((state) => state.auth.isAuthenticated);
    const userId = useSelector((state) => state.auth.userId);

    const handelsubmit = () => {
        if (auth) {
            const saledata = { userId, productname, quantity, amount };
            /* dispatch action when user add sale */
            dispatch(addSale(saledata));
            if (!error) {
                alert('sale added successfully');
                /* if no error occured while adding sale navigate to topsale screen */
                navigate('/topsales');
            } else {
                alert('sale added Failed');
            }
        } else {
            alert('login first to add sale');
        }
    }

    return (
        /* add sales enty form UI */
        <div className="flex flex-col items-center gap-y-5 px-3 shadow-2xl py-5">
            <div className="flex items-center border-b border-black w-full  md:w-[50%] py-2">
                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" name="Productname" id="productname" type="text" placeholder="Product Name" onChange={(e) => setproductName(e.target.value)} />
            </div>
            <div className="flex items-center border-b border-black w-full  md:w-[50%] py-2">
                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" name="Quantity" id="quantity" type="text" placeholder="Quantity" onChange={(e) => setQuantity(e.target.value)} />
            </div>
            <div className="flex items-center border-b border-black w-full  md:w-[50%] py-2">
                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" name="Amount" id="amount" type="text" placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
            </div>
            <div className=" w-full md:w-[50%] flex justify-center">
                <button className=" px-5 py-3 bg-black text-white border hover:bg-white hover:text-black hover:border-black" onClick={handelsubmit}>Submit</button>
            </div>
        </div>
    );
}

export default AddSalesForm;