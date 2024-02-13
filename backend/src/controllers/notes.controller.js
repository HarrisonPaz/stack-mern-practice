import Note from "../models/notes.js";

//Obtener todas las notas
const getNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        res.json({ notes });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

//Obtener una nota
const getNote = async (req, res) => {
    const id = req.params.id;
    try {
        const note = await Note.findById(id);
        res.json({ note });
    }
    catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

//Crear una nota
const createNote = async (req, res) => {
    const { title, content, author, date } = req.body;
    const newNote = new Note({
        title,
        content,
        author,
        date,
    });
    try {
        const savedNote = await newNote.save();
        res.json(savedNote);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

//Actualizar una nota
const updateNote = async (req, res) => {
    const id = req.params.id;
    const { title, content, author, date } = req.body;
    try {
        const updatedNote = await Note.findByIdAndUpdate(id, {
            title,
            content,
            date,
            author,
        });
        res.json(updatedNote);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

//Eliminar una nota
const deleteNote = async (req, res) => {
    const id = req.params.id;
    try {
        await Note.findByIdAndDelete(id);
        res.json({ message: "Note deleted" });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

export { getNotes, getNote, createNote, updateNote, deleteNote };
