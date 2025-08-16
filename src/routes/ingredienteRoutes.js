import express from "express";
import {
    crearIngrediente,
    listarIngredientes,
    obtenerIngrediente,
    actualizarIngredienteController,
    eliminarIngredienteController
} from "../controllers/ingredienteController.js";

const router = express.Router();

router.post("/", crearIngrediente);
router.get("/", listarIngredientes);
router.get("/:id", obtenerIngrediente);
router.put("/:id", actualizarIngredienteController);
router.delete("/:id", eliminarIngredienteController);

export default router;
