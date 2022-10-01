const User = require("../model/userSchema");

exports.getHomepage = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "This is the user homepage",
    });
}

exports.createData = (req, res, next) => {
    const { name, email, password } = req.body;
    const user = User.create({
        name,
        email,
        password
    });
    console.log(name, email, password);
    res.status(200).json({
        success: true,
        message: "User created successfully",
        user
    });
}