import express from 'express';
import reservaRoutes from './routes/reserva.routes.js';
import espacioRoutes from './routes/espacio.routes.js';
import usuarioRoutes from './routes/usuario.routes.js';

const app = express();

// Middleware para manejar JSON
app.use(express.json());

app.use(reservaRoutes);
app.use(espacioRoutes);
app.use(usuarioRoutes);

export default app;