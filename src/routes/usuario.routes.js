import { Router } from "express";
import { createUsuario, deleteUsuario, /*getUsuarioById,*/ getUsuarios, updateUsuario } from "../controllers/usuario.controller.js";


const router = Router();

// Rutas para Usuario
router.get('/usuarios', getUsuarios);            // Obtener todos los usuarios
//router.get('/usuario/:usuario_id', getUsuarioById);     // Obtener un usuario por ID
router.post('/usuario', createUsuario);         // Crear un nuevo usuario
router.put('/usuarioup/:usuario_id', updateUsuario);      // Actualizar un usuario por ID
router.delete('/usuariode/:usuario_id', deleteUsuario);   // Eliminar un usuario por ID

export default router;
