import { getDB } from "../config/db.js";
import { ObjectId } from "mongodb";

const collectionName = "ingredientes";

export async function insertarIngrediente(ingrediente) {
    const db = getDB();
    const result = await db.collection(collectionName).insertOne(ingrediente);
    return result;
}

export async function obtenerIngredientes() {
    const db = getDB();
    return await db.collection(collectionName).find().toArray();
}

export async function obtenerIngredientePorId(id) {
    const db = getDB();
    return await db.collection(collectionName).findOne({ _id: new ObjectId(id) });
}

export async function actualizarIngrediente(id, nuevosDatos) {
    const db = getDB();
    return await db.collection(collectionName).updateOne(
        { _id: new ObjectId(id) },
        { $set: nuevosDatos }
    );
}

export async function eliminarIngrediente(id) {
    const db = getDB();
    return await db.collection(collectionName).deleteOne({ _id: new ObjectId(id) });
}
