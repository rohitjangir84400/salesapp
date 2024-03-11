/* Sales controllers to performs sales backend processes  */

const User = require('../models/user.models');
const Entrydata = require('../models/entry.model');

const addSale = async (req, res) => {
    try {
        const { userId, productname, quantity, amount } = req.body; // Assuming userId and amount are sent in the request body

        // Create a new sale
        const sale = new Entrydata({ user: userId, productname, quantity, amount });

        // Save the sale
        await sale.save();
        // Update the user's sales array
        await User.findByIdAndUpdate({ _id: userId }, { $push: { sales: sale._id } });

        res.status(201).json({ message: 'Sale added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


const Topfive = async (req, resp) => {
    try {
        const topFiveSales = await Entrydata.find()
            .sort({ amount: -1 }) // Sort in descending order
            .limit(5); // Limit to the top five

        resp.status(200).json(topFiveSales);
    } catch (error) {
        console.error(error);
        resp.status(500).json({ message: 'Internal server error' });
    }
};

const getUserSales = async (req, resp) => {
    try {
        const userId = req.params.userId; // Assuming userId is passed as a route parameter
        const userSales = await Entrydata.find({ user: userId }).populate('user');
        resp.status(200).json(userSales);
    } catch (error) {
        console.error(error);
        resp.status(500).json({ message: 'Internal server error' });
    }
};

const getUserTotalRevenue = async (req, resp) => {
    try {
        const userId = req.params.userId;
        const userSales = await Entrydata.find({ user: userId }).populate('user');
        // Calculate the total revenue
        const totalRevenue = userSales.reduce((total, sale) => total + sale.amount, 0);

        resp.status(200).json({ totalRevenue });
    } catch (error) {
        console.error(error);
        resp.status(500).json({ message: 'Internal server error' });
    }
};

const TotalRevenue = async (req,resp)=>{
    try{
        const sales = await Entrydata.find();
        const totalrevenue = await sales.reduce((total , sale) => total + sale.amount , 0);
        resp.status(200).json({ totalrevenue });
    }catch(error){
        console.error(error);
        resp.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    addSale,
    Topfive,
    getUserSales,
    getUserTotalRevenue,
    TotalRevenue,
};
