const User = require('../models/user.model');

//create a user
exports.createUser = (req, res) => {
    if (!req.body.ssn || !req.body.fName || !req.body.lName || !req.body.age || !req.body.address) {
        throw Error("SSN, First Name, Last Name, Age, or Address cannot be empty!");
    }

    const data = req.body;

    try {
        const user = new User(data).save();
        return user;
    }
    catch (e) {
        throw Error('Error occurred while creating a user.');
    }
}

//get all users
exports.getUsers = async function () {

    try {
        const users = await User.find()
        return users;
    } catch (e) {
        // Log Errors
        throw Error('Error while retrieving Users')
    }
}

//get single user
exports.getUser = async function (ssn) {
    try {
        const user = await User.findOne(ssn);
        //console.log(ssn);
        return user;
    }
    catch (e) {
        throw Error('Error while retrieving the User')
    }
}

exports.deleteUsers = async function () {

    try {
        const users = await User.deleteMany();
        //console.log(users);
        return users;
    } catch (e) {
        // Log Errors
        throw Error('Error while deleting Users')
    }
}

exports.deleteUser = async function (ssn) {
    try {
        const user = await User.deleteOne(ssn);
        //console.log(ssn);
        return user;
    }
    catch (e) {
        //console.log(ssn);
        throw Error('Error while deleting the User')
    }
}

exports.updateUser = async function (ssn, req, res) {
    try {
        const data = req.body;
        const user = await User.updateOne(ssn, data);
        //console.log(ssn);
        return user;
    }
    catch (e) {
        //console.log(ssn);
        throw Error('Error while updating the User')
    }
}

exports.patchUser = async function (ssn, req, res) {
    try {
        const user = await User.updateOne(ssn, {$set: req.body});
        //console.log(ssn);
        return user;
    }
    catch (e) {
        //console.log(ssn);
        throw Error('Error while patching the User')
    }
}