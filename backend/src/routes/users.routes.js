import { Router } from "express";
import * as usersCtrl from '../controllers/users.controller.js';

const router = Router();

router.route('/')
    .get(usersCtrl.getUsers)
    .post(usersCtrl.createUser);

router.route('/:id')
    .get(usersCtrl.getUser)
    .put(usersCtrl.updateUser)
    .delete(usersCtrl.deleteUser);

export default router;