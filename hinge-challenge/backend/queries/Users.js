const db = require('../db/index');

const getUser = async(req, res, next) => {
    try {
        let userData = await db.one('SELECT * FROM Users WHERE email = $1', [req.params.email]);
        res.status(200).json({
            status: 'success',
            message: 'user data retrieved',
            payload: userData
        });
    } catch(error) {
        res.status(400).json({
            status: 'error',
            message: 'could not retrieve user data'
        });
    }
}

const editUser = async(req, res, next) => {
    try {
        let editedData = await db.one(`UPDATE Users SET name = '${req.body.name}', email = '${req.body.email}', bio = '${req.body.bio}' WHERE email = '${req.params.email}' RETURNING *`);
        res.status(200).json({
            status: 'success',
            message: 'user data edited',
            payload: editedData
        });
    } catch(error) {
        res.status(400).json({
            status: 'error',
            message: 'could not edit user data'
        });
    }
}

const getAllUsers = async(req, res, next) => {
    try {
        let allUsers = await db.any('SELECT * FROM Users');
        res.status(200).json({
            status: 'success',
            message: 'all users data retrieved',
            payload: allUsers
        });
    } catch(error) {
        res.status(400).json({
            status: 'error',
            message: 'could not retrieve all users'
        });
    }
}

module.exports = {getUser, editUser, getAllUsers}