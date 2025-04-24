import mongoose from "mongoose";

export const ConnectDB = async ()=>{
    await mongoose.connect("mongodb+srv://naolumer3:qwerty12345@cluster0.gmm7c7j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("DB Connected");
}