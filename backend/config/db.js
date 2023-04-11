import mongoose from "mongoose";

const connectDB = async () => {
    try{
      const connect = await mongoose.connect(process.env.MONGO_URL)
      console.log(`connect to mongodb ${connect.connection.host}`)
    }catch(err){
        console.log(`error in mongodb ${err}`.bgRed.white)
    }
};

export default connectDB