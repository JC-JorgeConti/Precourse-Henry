const URL = "https://rickandmortyapi.com/api/character/";

// const getCharacterById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const personajes = await axios.get(URL + id).data;
//     console.log(personajes, "-> per");
//   } catch (error) {}
// };
const axios = require(`axios`);
const getCharacterById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, gender, species, origin, image, status } = (
      await axios.get(URL + id)
    ).data;
    const character = { id, name, gender, species, origin, image, status };

    return character.name
      ? res.json(character)
      : res.status(404).send("Character not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// const data = require("../utils/data");

// const getCharacterById = (req, res) => {
//   const { id } = req.params;
//   const character = data.find((char) => char.id == id);

//   if (character) return res.status(200).json(character);
//   else
//     return res.status(404).json({
//       error: `El personaje con ID ${id} no existe en nuestra BDD`,
//     });
// };

module.exports = getCharacterById;
