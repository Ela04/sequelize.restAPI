//import reserva from '../models/reserva.js';

// Funciones para Reserva
export const getReservas = (req, res) => {
  res.send('Getting all reservations');
};

export const getReservaById = (req, res) => {
  res.send(`Getting reservation with ID: ${req.params.id}`);
};

export const createReserva = (req, res) => {
  console.log(req.body)
  res.send('Creating reservation');
};

export const updateReserva = (req, res) => {
  res.send(`Updating reservation with ID: ${req.params.id}`);
};

export const deleteReserva = (req, res) => {
  res.send(`Deleting reservation with ID: ${req.params.id}`);
};
