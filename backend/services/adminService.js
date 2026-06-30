class AdminService {

    getDashboard() {

        return {
            users: 0,
            products: 0,
            orders: 0,
            scans: 0
        };

    }

}

module.exports = new AdminService();
