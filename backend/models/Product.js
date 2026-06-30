class Product {

    constructor(name, description, price, image) {

        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;

        this.likes = 0;

        this.scans = 0;

        this.createdAt = new Date();

    }

}

module.exports = Product;
