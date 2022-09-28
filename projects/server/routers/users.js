import express from "express";
const router = express.Router();
// #import Controller
import { getUsers } from '../controllers/userController';

router.get('/', getUsers);

export default router;