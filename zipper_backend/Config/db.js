const mongoose = require("mongoose")

const connectDB = async ()=>{
    try {
        const conn =await mongoose.connect(process.env.MONGO_URI,{
        })
        console.log(`MongoDB connected ${conn.connection.host}`)
        
    } catch (error) {
        console.log(`Not Connected ${error.message}`)
        
    }
}
module.exports = connectDB