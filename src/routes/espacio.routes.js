import { Router } from "express";
import { createEspacio, deleteEspacio, getEspacioById, getEspacios, updateEspacio } from "../controllers/espacio.controller.js";
const router = Router();

// Rutas para Espacio
router.get('/espacios', getEspacios);            // Obtener todos los espacios
router.get('/espacio/:id', getEspacioById);     // Obtener un espacio por ID
router.post('/espacio', createEspacio);         // Crear un nuevo espacio
router.put('/espacio/:id', updateEspacio);      // Actualizar un espacio por ID
router.delete('/espacio/:id', deleteEspacio);   // Eliminar un espacio por ID

export default router;
