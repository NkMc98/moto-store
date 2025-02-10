import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // ✅ Cargar las variables de entorno desde .env

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`🔥 Conectado a MongoDB: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Error en conexión a MongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;

