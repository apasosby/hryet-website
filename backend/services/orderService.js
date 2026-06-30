class OrderService {

    getOrders() {

        return [];

    }

    createOrder(order) {

        return {
            success: true,
            data: order
        };

    }

}

module.exports = new OrderService();
