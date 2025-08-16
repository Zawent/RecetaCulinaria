// models/recetaModel.js
import { getDB } from "../config/db.js";
import { ObjectId } from "mongodb";

const collectionName = "recetas";

export async function insertarReceta(receta) {
    const db = getDB();
    const nuevaReceta = {
        ...receta,
        usuarioId: new ObjectId(receta.usuarioId), // referencia al usuario creador
        ingredientesIds: receta.ingredientesIds.map(id => new ObjectId(id)), // referencias a ingredientes
    };
    const result = await db.collection(collectionName).insertOne(nuevaReceta);
    return result;
}

export async function obtenerRecetas() {
    const db = getDB();
    return await db.collection(collectionName).find().toArray();
}

export async function obtenerRecetaPorId(id) {
    const db = getDB();
    return await db.collection(collectionName).findOne({ _id: new ObjectId(id) });
}

export async function actualizarReceta(id, nuevosDatos) {
    const db = getDB();
    if (nuevosDatos.usuarioId) {
        nuevosDatos.usuarioId = new ObjectId(nuevosDatos.usuarioId);
    }
    if (nuevosDatos.ingredientesIds) {
        nuevosDatos.ingredientesIds = nuevosDatos.ingredientesIds.map(i => new ObjectId(i));
    }
    return await db.collection(collectionName).updateOne(
        { _id: new ObjectId(id) },
        { $set: nuevosDatos }
    );
}

export async function eliminarReceta(id) {
    const db = getDB();
    return await db.collection(collectionName).deleteOne({ _id: new ObjectId(id) });
}
