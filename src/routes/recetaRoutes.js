import express from "express";
import {
    crearReceta,
    listarRecetas,
    obtenerReceta,
    editarReceta,
    borrarReceta
} from "../controllers/recetaController.js";

const router = express.Router();

router.post("/", crearReceta);
router.get("/", listarRecetas);
router.get("/:id", obtenerReceta);
router.put("/:id", editarReceta);
router.delete("/:id", borrarReceta);

export default router;
