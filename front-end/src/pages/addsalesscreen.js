import AddSalesForm from "../components/addsalesform";

function AddSales() {
    return (
        /* addsles screen layout */
        <div className=" px-10 md:px-20 py-10">
            <div className="text-[30px] font-bold text-center p-5">
                Add Sale Entry
            </div>
            <div>
                <AddSalesForm />
            </div>
        </div>
    );
}

export default AddSales;