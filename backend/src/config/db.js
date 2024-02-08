import mongoose from 'mongoose';
import { HOST, PORT, DATABASE} from '../../.env.mjs'

const URI = `mongodb://${HOST}:${PORT}/${DATABASE}`;

const connectDB = async () => {
    try {
        // mongodb connection string
        const con = await mongoose.connect(URI);
        console.log(`MongoDB connected: ${con.connection.host}`);
    } catch (err) {
        console.error('Error de conexion a MongoDB', err);
        process.exit(1);
    }
};

export default connectDB;