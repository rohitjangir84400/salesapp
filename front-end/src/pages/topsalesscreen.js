import Topsalesdata from "../components/topsales";

function Topsales() {
    return (
        /* Top 5 sales screen layout */
        <div className="md:px-20 py-10">
            <div className="text-[30px] font-bold text-center p-5">
                Top 5 Sales
            </div>
            <div>
                <Topsalesdata/>
            </div>
        </div>
    );
}

export default Topsales;