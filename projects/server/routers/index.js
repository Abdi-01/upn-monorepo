import fs from 'fs';
import path from 'path';
import express from "express";
const router = express.Router();
const basename = path.basename(__filename);

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        console.log("Check existing file", file)
        const routing = require(path.join(__dirname, file)).default;
        if (typeof routing == 'function') {
            router.use(`/${file.split('.')[0]}`, routing);
        }
    });

export default router;