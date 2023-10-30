const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  try {
    const { name, origin, status, image, species, gender } = req.body;

    // Verificamos que toda nuestra base este llegando

    if (!name || !origin || !status || !image || !species || !gender) {
      return res.status(401).send("Faltan datos");
    }

    // GUARDAMOS EN BASE DE DATOS

    await Favorite.findOrCreate({
      where: { name, origin, status, image, species, gender },
    });

    // CONSULTO Y RETORNO TODOS MIS FAVORITOS

    const allFavs = await Favorite.findAll();
    return res.json(allFavs);
  } catch (error) {
    return res.status(500).send(error.messag);
  }
};

module.exports = postFav;
