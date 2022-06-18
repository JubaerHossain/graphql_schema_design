const ordersModel = require('../model/orders.model');
module.exports = {
    Query: {
        orders: () => {
            const orders = ordersModel.getAllOrders();
            return orders;
        }
    }
};
