const path = require("path");
const login = require('../model/userRecord');
exports.processForm = (req, res) => {
    // how to distructure javascript object
    const { email, password } = req.body;
    console.log(req.body);
    if (!email || !password ) {
        // respond with a file
        // res.sendFile(path.resolve("views/error.html"));
        // respond with an object
        res.status(422).json({ ok: false, message: "Please fill all fields" })
    } else {
        login.loginDetailsDatabase.push({ email, password });
        // res.sendFile(path.resolve("views/signup.html"))

        res.status(201).json({ ok: true, message: "Login Succesful" })
    }
};

