import { DataTypes } from 'sequelize';
import { seque } from '../database/db.js';
import { Usuario } from './usuario.js';
import { Espacio } from './espacio.js';

export const Reserva = seque.define('reserva', {
  reserva_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'usuario_id',
    },
    allowNull: false,
  },
  espacio_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Espacio,
      key: 'espacio_id',
    },
    allowNull: false,
  },
  fecha_reserva: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  tiempo_ini: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  tiempo_fin: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  descrip_evento: {
    type: DataTypes.TEXT,
  },
  num_gente: {
    type: DataTypes.INTEGER,
  },
  estado: {
    type: DataTypes.STRING,
    defaultValue: 'Disponible',
  },
}, {
  timestamps: true,
});

// Relacionar Reserva con Usuario y Espacio
Reserva.belongsTo(Usuario, { foreignKey: 'usuario_id' });
Reserva.belongsTo(Espacio, { foreignKey: 'espacio_id' });
Usuario.hasMany(Reserva, { foreignKey: 'usuario_id' });
Espacio.hasMany(Reserva, { foreignKey: 'espacio_id' });
