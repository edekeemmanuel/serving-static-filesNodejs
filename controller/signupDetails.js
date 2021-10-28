const path = require("path");
const db = require('../model/userRecord');
exports.processForm = (req, res) => {
    // how to distructure javascript object
    const { firstName, lastName, email, gender, password, confirmPassword, educationalLevel, experienceLevel, aboutYou} = req.body;
    console.log(req.body);
    if (!firstName || !lastName || !email || !gender ||!password || !confirmPassword || !educationalLevel || !experienceLevel || !aboutYou) {
        // respond with a file
        // res.sendFile(path.resolve("views/error.html"));
        // respond with an object
        res.status(422).json({ ok: false, message: "Please fill all fields" })
    } else {
        db.signupDetailsDatabase.push({ firstName, lastName, email, gender, password, confirmPassword, educationalLevel, experienceLevel, aboutYou });
        res.sendFile(path.resolve("views/login.html"))

        // res.status(201).json({ ok: true, message: "Registration Succesful" })
    }
};

