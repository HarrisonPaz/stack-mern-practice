import { Router } from "express";
import * as notesCtrl from '../controllers/notes.controller.js';

const router = Router();

router.route('/')
    .get(notesCtrl.getNotes)
    .post(notesCtrl.createNote);

router.route('/:id')
    .get(notesCtrl.getNote)
    .put(notesCtrl.updateNote)
    .delete(notesCtrl.deleteNote);

export default router;