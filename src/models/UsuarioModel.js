import { getDB } from "../config/db.js";

export const UsuarioModel = {
  collection: () => getDB().collection("usuarios"),

  async create(usuario) {
    return await this.collection().insertOne(usuario);
  },

  async findAll() {
    return await this.collection().find().toArray();
  },

  async findById(id) {
    return await this.collection().findOne({ _id: id });
  },

  async update(id, data) {
    return await this.collection().updateOne({ _id: id }, { $set: data });
  },

  async delete(id) {
    return await this.collection().deleteOne({ _id: id });
  }
};
