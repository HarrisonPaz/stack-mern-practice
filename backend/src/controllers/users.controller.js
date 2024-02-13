import User from "../models/users.js";

//Obtener todos los usuarios
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json({users});
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

//Obtener un usuario
const getUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id);
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

//Crear un usuario
const createUser = async (req, res) => {
    const { username } = req.body;
    const newUser = new User({
        username,
    });
    try {
        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

//Actualizar un usuario
const updateUser = async (req, res) => {
    const id = req.params.id;
    const { username } = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            username,
        });
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

//Eliminar un usuario
const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        await User.findByIdAndDelete(id);
        res.json({ message: "User Deleted" });
    }
    catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

export { getUsers, getUser, createUser, updateUser, deleteUser };