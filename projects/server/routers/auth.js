import express from "express";
const router = express.Router();
// #import Controller
import { auth } from '../controllers/userController';

router.post('/', auth);

export default router;