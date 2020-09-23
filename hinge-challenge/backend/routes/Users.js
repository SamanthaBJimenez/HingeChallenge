const usersRouter = require('express').Router();
const {getUser, editUser, getAllUsers} = require('../queries/Users');

usersRouter.get('/profile/:email', getUser);
usersRouter.patch('/profile/edit/:email', editUser);
usersRouter.get('/', getAllUsers);

module.exports = usersRouter;