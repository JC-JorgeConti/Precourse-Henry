// const { checkUser } = require("../service/usersService");
const { User } = require("../DB_connection");

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificamos que lleguen los datos.
    if (!email || !password) return res.status(400).send("Faltan datos.");

    // Consulta a la base de datos
    const user = await User.findOne({ where: { email: email } });

    // Verifico si encontro el usuario
    if (!user) return res.status(404).send("Usuario no encontrado.");

    // Verifico si la password es la misma
    return user.password === password
      ? res.json({ access: true })
      : res.status(403).send("Contraseña incorrecta. ");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = loginController;
