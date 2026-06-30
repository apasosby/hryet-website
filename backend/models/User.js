class User {

    constructor(name, email, password) {

        this.name = name;
        this.email = email;
        this.password = password;

        this.profilePhoto = "";

        this.bio = "";

        this.socials = {

            instagram: "",

            tiktok: "",

            facebook: "",

            x: ""

        };

        this.qrCode = "";

        this.likes = 0;

        this.scans = 0;

        this.createdAt = new Date();

    }

}

module.exports = User;
