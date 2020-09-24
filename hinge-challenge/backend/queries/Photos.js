const db = require('../db/index');

const getUsersPhotos = async(req, res, next) => {
    try {
        let usersPhotos = await db.one('SELECT * FROM Photos WHERE userid = $1', [req.params.userid]);
        res.status(200).json({
            status: 'success',
            message: 'user data retrieved',
            payload: usersPhotos
        });
    } catch(error) {
        res.status(400).json({
            status: 'error',
            message: 'could not retrieve user data'
        });
    }
}

module.exports = {getUsersPhotos};