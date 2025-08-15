import express from "express";
import dotenv from "dotenv";
import { connect } from "./config/db.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import ingredienteRoutes from "./routes/ingredienteRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/usuarios", usuarioRoutes);
app.use("/ingredientes", ingredienteRoutes);

const PORT = process.env.PORT || 3000;

connect().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error("❌ Error conectando a la base de datos:", err);
});
