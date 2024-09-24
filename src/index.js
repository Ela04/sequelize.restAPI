import app from './app.js'
import { seque } from './database/db.js'
// import './models/espacio.js'
// import './models/usuario.js'
// import './models/reserva.js'


async function main(){
  try {
  //await seque.authenticate();
    await seque.sync({force: false})
    app.listen(4000)
    console.log('Server is Listening on port', 4000)
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main();