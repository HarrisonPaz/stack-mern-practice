import express from 'express';
import notes from './notes.routes.js';
import users from './users.routes.js';

const router = express.Router();

router.use('/notes', notes);
router.use('/users', users);

export default router;