import {
    insertarReceta,
    obtenerRecetas,
    obtenerRecetaPorId,
    actualizarReceta,
    eliminarReceta
} from "../models/RecetaModel.js";

export async function crearReceta(req, res) {
    try {
        const nuevaReceta = req.body;
        const result = await insertarReceta(nuevaReceta);
        res.status(201).json({ message: "Receta creada exitosamente", result });
    } catch (error) {
        res.status(500).json({ message: "Error al crear la receta", error: error.message });
    }
}

export async function listarRecetas(req, res) {
    try {
        const recetas = await obtenerRecetas();
        res.json(recetas);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las recetas", error: error.message });
    }
}

export async function obtenerReceta(req, res) {
    try {
        const receta = await obtenerRecetaPorId(req.params.id);
        if (!receta) {
            return res.status(404).json({ message: "Receta no encontrada" });
        }
        res.json(receta);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener la receta", error: error.message });
    }
}

export async function editarReceta(req, res) {
    try {
        const result = await actualizarReceta(req.params.id, req.body);
        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Receta no encontrada" });
        }
        res.json({ message: "Receta actualizada exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar la receta", error: error.message });
    }
}

export async function borrarReceta(req, res) {
    try {
        const result = await eliminarReceta(req.params.id);
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Receta no encontrada" });
        }
        res.json({ message: "Receta eliminada exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar la receta", error: error.message });
    }
}
