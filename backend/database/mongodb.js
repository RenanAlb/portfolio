import mongoose from "mongoose";

const connectToDataBase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@my-portfolio.7p8vq.mongodb.net/?retryWrites=true&w=majority&appName=my-portfolio`
    );

    console.log("Conectado ao MongoDB");
  } catch (error) {
    console.error("Ocorreu algum erro ao se conectar ao MongoDB:", error);
  }
};

export default connectToDataBase;
