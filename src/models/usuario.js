import { DataTypes } from 'sequelize';
import { seque } from '../database/db.js';

export const Usuario = seque.define('usuario', {
  usuario_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  correo: {
    type: DataTypes.STRING,
  },
  telefono:
  {
    type: DataTypes.STRING,

  },
  depto: {
    type: DataTypes.INTEGER,
  },
},
  {
    timestamps: true,
  }
);