import {
    insertarIngrediente,
    obtenerIngredientes,
    obtenerIngredientePorId,
    actualizarIngrediente,
    eliminarIngrediente
} from "../models/IngredienteModel.js";

// Crear ingrediente
export async function crearIngrediente(req, res) {
    try {
        const { nombre, categoria } = req.body;

        if (!nombre) {
            return res.status(400).json({ mensaje: "El nombre del ingrediente es obligatorio" });
        }

        const nuevoIngrediente = {
            nombre,
            categoria: categoria || null
        };

        const result = await insertarIngrediente(nuevoIngrediente);
        res.status(201).json({ mensaje: "Ingrediente creado", id: result.insertedId });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al crear ingrediente", error });
    }
}

// Listar ingredientes
export async function listarIngredientes(req, res) {
    try {
        const ingredientes = await obtenerIngredientes();
        res.json(ingredientes);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener ingredientes", error });
    }
}

// Obtener ingrediente por ID
export async function obtenerIngrediente(req, res) {
    try {
        const ingrediente = await obtenerIngredientePorId(req.params.id);
        if (!ingrediente) {
            return res.status(404).json({ mensaje: "Ingrediente no encontrado" });
        }
        res.json(ingrediente);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener ingrediente", error });
    }
}

// Actualizar ingrediente
export async function actualizarIngredienteController(req, res) {
    try {
        const { nombre, categoria } = req.body;

        if (!nombre && !categoria) {
            return res.status(400).json({ mensaje: "Debes enviar al menos un campo para actualizar" });
        }

        const result = await actualizarIngrediente(req.params.id, req.body);
        if (result.matchedCount === 0) {
            return res.status(404).json({ mensaje: "Ingrediente no encontrado" });
        }
        res.json({ mensaje: "Ingrediente actualizado" });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar ingrediente", error });
    }
}

// Eliminar ingrediente
export async function eliminarIngredienteController(req, res) {
    try {
        const result = await eliminarIngrediente(req.params.id);
        if (result.deletedCount === 0) {
            return res.status(404).json({ mensaje: "Ingrediente no encontrado" });
        }
        res.json({ mensaje: "Ingrediente eliminado" });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar ingrediente", error });
    }
}
