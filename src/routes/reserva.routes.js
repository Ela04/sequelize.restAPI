import { Router } from "express";
import { createReserva, deleteReserva, getReservaById, getReservas, updateReserva } from "../controllers/reserva.controller.js";

const router = Router();

// Rutas para Reserva
router.get('/reservas', getReservas);            // Obtener todas las reservas
router.get('/reserva/:id', getReservaById);     // Obtener una reserva por ID
router.post('/reserva', createReserva);         // Crear una nueva reserva
router.put('/reserva/:id', updateReserva);      // Actualizar una reserva por ID
router.delete('/reserva/:id', deleteReserva);   // Eliminar una reserva por ID

export default router;
