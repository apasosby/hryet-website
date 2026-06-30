class ProductService {

    getAllProducts() {

        return [];

    }

    createProduct(product) {

        return {
            success: true,
            data: product
        };

    }

}

module.exports = new ProductService();
