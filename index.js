// imports express from node_modules folder
const express = require ("express");
const user = require("./controller/user");
const path = require('path');
const loginDetails = require("./controller/loginDetails");
const signupDetails = require("./controller/signupDetails");
// const allUser = require("./controller/userDetails");

const upload = require("./utils/multerConfig");


// console.log(user)
// console.log(allUser)
// console.log(getUserDetails)


//converting express to app var
const app = express();


// check the views and then pass it to the middleware
app.use(express.static("./views"));
app.use(express.static(path.resolve('public')));

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get('/', user.homepage)


//get all user
app.get('/userDetails/all', user.getUserDetails);
//get a single user
app.get('/userDetails/:id', user.getSingleUser);

// update a users
app.put('/userDetails/:id', upload.single("avatar"), user.updateNewUser);
// get all user details
app.put('/userDetails/all', user.getUserDetails);

// deleted user
app.delete('/userDetails/:id', user.getDeleteUser);

// create user
app.post('/userDetails/:id', user.getCreateUser);

app.post("/loginDetails", loginDetails.processForm);
app.post("/signupDetails", signupDetails.processForm);





const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));