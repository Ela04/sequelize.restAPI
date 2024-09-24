import { seque } from "../database/db.js";
import { DataTypes } from "sequelize";

export const Espacio = seque.define('espacio', {
  espacio_id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre:{
    type: DataTypes.STRING,
  },
  correo:{
    type: DataTypes.INTEGER,
  },
  telefono:{
    type: DataTypes.STRING,
  },
  depto:{
    type: DataTypes.INTEGER,
  }
},
  {
    timestamps: true,
  }
);