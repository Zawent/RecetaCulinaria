import { UsuarioModel } from "../models/UsuarioModel.js";
import { ObjectId } from "mongodb";

// Crear un usuario
export async function crearUsuario(req, res) {
  try {
    const { nombre, email, password } = req.body;

    if (!nombre || !email || !password) {
      return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    const nuevoUsuario = {
      nombre,
      email,
      password,
      fechaRegistro: new Date()
    };

    const resultado = await UsuarioModel.create(nuevoUsuario);
    res.status(201).json({ mensaje: "Usuario creado", id: resultado.insertedId });

  } catch (error) {
    res.status(500).json({ error: "Error al crear usuario", detalles: error.message });
  }
}

// Listar todos los usuarios
export async function listarUsuarios(req, res) {
  try {
    const usuarios = await UsuarioModel.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: "Error al listar usuarios", detalles: error.message });
  }
}

// Ver un usuario por ID
export async function obtenerUsuario(req, res) {
  try {
    const { id } = req.params;

    const usuario = await UsuarioModel.findById(new ObjectId(id));
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener usuario", detalles: error.message });
  }
}

// Actualizar un usuario
export async function actualizarUsuario(req, res) {
  try {
    const { id } = req.params;
    const datos = req.body;

    const resultado = await UsuarioModel.update(new ObjectId(id), datos);

    if (resultado.matchedCount === 0) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.json({ mensaje: "Usuario actualizado" });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar usuario", detalles: error.message });
  }
}

// Eliminar un usuario
export async function eliminarUsuario(req, res) {
  try {
    const { id } = req.params;

    const resultado = await UsuarioModel.delete(new ObjectId(id));

    if (resultado.deletedCount === 0) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.json({ mensaje: "Usuario eliminado" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar usuario", detalles: error.message });
  }
}
