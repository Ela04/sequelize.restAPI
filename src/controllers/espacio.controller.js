//import espacio from '../models/espacio.js';

// Funciones para Espacio
export const getEspacios = (req, res) => {
  res.send('Getting all spaces');
};

export const getEspacioById = (req, res) => {
  res.send(`Getting space with ID: ${req.params.id}`);
};

export const createEspacio = (req, res) => {
  res.send('Creating space');
};

export const updateEspacio = (req, res) => {
  res.send(`Updating space with ID: ${req.params.id}`);
};

export const deleteEspacio = (req, res) => {
  res.send(`Deleting space with ID: ${req.params.id}`);
};
