import { Usuario } from '../models/usuario.js';


export const getUsuarios = async (req, res) => {
  try{
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createUsuario = async (req, res) => {
  try {
    const { name, correo, telefono, depto } = req.body;

    const newUsuario = await Usuario.create({
      nombre: name,
      correo: correo,
      telefono: telefono,
      depto: depto,
    });

    res.status(201).json({
      message: 'User created successfully',
      data: newUsuario,
    });

    res.json(newUsuario);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
// Funciona

export const updateUsuario = async(req, res) => {
  try {
    const { usuario_id } = req.params;
    const { nombre, correo, telefono, depto } = req.body

    const usuario = await Usuario.findByPk(usuario_id)
    usuario.nombre = nombre
    usuario.correo = correo
    usuario.telefono = telefono
    usuario.depto = depto

    await usuario.save()

    console.log(usuario)

    res.json(usuario); 
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteUsuario = async (req, res) => {
  try {
    const { usuario_id } = req.params;

    // Verificar si el usuario_id existe
    if (!usuario_id) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }

    const deleted = await Usuario.destroy({
      where: {
        usuario_id,
      },
    });

    // Si no se eliminó ningún usuario
    if (!deleted) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Respuesta exitosa sin contenido (204 No Content)
    return res.sendStatus(204); // Solo esta línea es suficiente
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Funciona