const errorHandler = require('../utils/errorHandler');
const Info = require('../models/Info');

module.exports.get = async (req, res) => {
    try {
        const info = await Info.findOne({
            userId: req.body.userId,
        });
        res.status(200).json(info);
    } catch (e) {
        errorHandler(e);
    }
};

module.exports.update = async (req, res) => {
    try {
        const info = await new Info({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            user: req.user.id,
        }).findOneAndUpdate(
            { userId: req.user.id},
            { $set: req.body},
            {new: true}
        );
        res.status(200).json(info);
    } catch (e) {
        errorHandler(e);
    }
};