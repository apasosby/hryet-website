class ProductService {

    constructor() {

        this.products = [];

    }

    getAllProducts() {

        return this.products;

    }

    createProduct(product) {

        this.products.push(product);

        return {

            success: true,

            message: "Producto agregado",

            data: product

        };

    }

}

module.exports = new ProductService();
