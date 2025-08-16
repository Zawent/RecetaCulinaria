# 🍽️ Plataforma de Recetas Culinarias

API REST para gestionar **usuarios**, **recetas** e **ingredientes**.
Permite a los usuarios registrarse, agregar recetas con sus ingredientes, listar recetas y buscar recetas que contengan un ingrediente específico.

-----

## 🚀 Tecnologías utilizadas

  - Node.js
  - Express.js
  - MongoDB (con Mongoose)
  - Dotenv

-----

## ⚙️ Instalación y configuración

1.  Clonar el repositorio:
    `git clone https://github.com/tu-usuario/plataforma-recetas.git`
    `cd plataforma-recetas`
2.  Instalar dependencias:
    `npm install`
3.  Crear archivo `.env` en la raíz:
    `PORT=3000`
    `MONGO_URI=mongodb://127.0.0.1:27017/recetas_db`
4.  Inicializar datos de prueba:
    `node dataset.js`
5.  Levantar el servidor:
    `npm run dev`

Servidor en: 👉 http://localhost:3000

-----

## 📂 Estructura del proyecto

`plataforma-recetas`
`├── config/db.js`
`├── controllers/`
`├── models/`
`├── routes/`
`│   ├── usuarioRoutes.js`
`│   ├── recetaRoutes.js`
`│   └── ingredienteRoutes.js`
`├── dataset.js`
`├── server.js`
`└── README.md`

-----

## 📌 Endpoints de la API

### 👤 Usuarios

| Método   | Ruta          | Descripción                          |
| :------- | :------------ | :----------------------------------- |
| `POST`   | `/usuarios`   | Crear usuario                        |
| `GET`    | `/usuarios`   | Listar usuarios                      |
| `GET`    | `/usuarios/:id`| Obtener un usuario                   |
| `PUT`    | `/usuarios/:id`| Actualizar usuario                   |
| `DELETE` | `/usuarios/:id`| Eliminar usuario y sus recetas       |

**Ejemplo - Crear Usuario**
`POST /usuarios`
`{ "nombre": "Juan Pérez", "email": "juan@example.com"}`

**Respuesta**
`{ "msg": "Usuario creado exitosamente", "usuario": { "_id": "64a123456789", "nombre": "Juan Pérez", "email": "juan@example.com" }}`

### 🍲 Recetas

| Método   | Ruta          | Descripción                        |
| :------- | :------------ | :--------------------------------- |
| `POST`   | `/recetas`    | Crear receta                       |
| `GET`    | `/recetas`    | Listar todas las recetas           |
| `GET`    | `/recetas/:id`| Obtener receta por id              |
| `PUT`    | `/recetas/:id`| Editar receta                      |
| `DELETE` | `/recetas/:id`| Eliminar receta                    |

**Ejemplo - Crear Receta**
`POST /recetas`
`{ "titulo": "Pollo al horno", "descripcion": "Receta deliciosa y fácil", "usuarioId": "64a123456789"}`

**Respuesta**
`{ "msg": "Receta creada exitosamente", "receta": { "_id": "64a987654321", "titulo": "Pollo al horno", "descripcion": "Receta deliciosa y fácil", "usuario": "64a123456789" }}`

### 🧂 Ingredientes

| Método   | Ruta            | Descripción                        |
| :------- | :-------------- | :--------------------------------- |
| `POST`   | `/ingredientes`   | Crear ingrediente                  |
| `GET`    | `/ingredientes`   | Listar todos los ingredientes      |
| `GET`    | `/ingredientes/:id` | Obtener ingrediente por id         |
| `PUT`    | `/ingredientes/:id` | Actualizar ingrediente             |
| `DELETE` | `/ingredientes/:id` | Eliminar ingrediente               |

**Ejemplo - Crear Ingrediente**
`POST /ingredientes`
`{ "nombre": "Pollo", "recetaId": "64a987654321"}`

**Respuesta**
`{ "msg": "Ingrediente agregado exitosamente", "ingrediente": { "_id": "64a55555555", "nombre": "Pollo", "receta": "64a987654321" }}`

-----

## ✅ Manejo de Errores

La API devuelve mensajes claros:
`{ "error": "Recurso no encontrado"}`

-----

## 🎥 Video Demostrativo

👉 

## 👨‍💻 Autores
Uriel Fabian Vargas Parada
  - Integrante 1
  - Integrante 2
  - Integrante 3
