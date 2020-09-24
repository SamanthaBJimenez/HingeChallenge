const photosRouter = require('express').Router();
const {getUsersPhotos} = require('../queries/Photos');

photosRouter.get('/:userid', getUsersPhotos);

module.exports = photosRouter;