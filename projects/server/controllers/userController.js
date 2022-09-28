import db from "../database/models";
const users = db.users;


export const getUsers = async (req, res, next) => {
    try {
        let get = await users.findAll({ where: req.query });
        res.status(200).send({
            success: true,
            message: "GET data success ✅",
            data: get
        })
    } catch (error) {
        next(error);
    }
}

export const auth = async (req, res, next) => {
    try {
        if (req.body.username && req.body.password) {
            let login = await users.findAll({
                where: {
                    username: req.body.username,
                    password: req.body.password
                }
            })
            res.status(200).send({
                success: true,
                message: "Auth data success ✅",
                data: login
            })
        } else {
            res.status(401).send({
                success: false,
                message: "Data auth not complete"
            })
        }
    } catch (error) {
        next(error);
    }
}
