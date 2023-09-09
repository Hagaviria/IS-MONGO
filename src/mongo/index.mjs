import mongoose from "mongoose"
// conexion a mongo 
export const startConnection = async () => {
    const url = encodeURI("mongodb+srv://hagavilon:hagaviria@cluster0.vnr5soi.mongodb.net/");
    await mongoose.connect(url);
}