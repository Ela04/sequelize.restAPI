import { Sequelize } from "sequelize";

// Option 3: Passing parameters separately (other dialects)
export const seque = new Sequelize(
  'postgres', 
  'postgres', 
  '1234', 
  {
    host: 'localhost',
    dialect: 'postgres'
  }
);