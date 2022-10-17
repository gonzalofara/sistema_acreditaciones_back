const { Router } = require("express");
const router = Router(); //express.Router('')
const { Invitados, Evento } = require("../db");
const axios = require("axios");
const { Op } = require("sequelize");

router.post("/", async (req, res) => {
  console.log(req.body);

  try {
    let nuevaLista = req.body.map((i) => {
      return {
        id: i.id,
        list_id: i.list_id,
        first_name: i.first_name,
        last_name: i.last_name,
        company: i.company,
        title: i.title,
        email: i.email,
        phone: i.phone,
        dni: i.dni,
        status: i.status,
        path: i.path,
        properties: i.properties,
      };
    });
    await Invitados.bulkCreate(nuevaLista);

    // let assignTypes = await Promise.all(
    //   types.map((t) => Type.findOne({ where: { name: t } }))
    // );

    // newPokemon.setTypes(assignTypes);

    return res.status(201).json(nuevaLista);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    let invitadosDb = await Invitados.findAll();
    res.status(200).json(invitadosDb);
  } catch (error) {
    return res.status(404).send(error.message);
  }
});

router.get("/:idPokemon", async (req, res) => {
  const { idPokemon } = req.params;

  if (idPokemon.length > 4) {
    try {
      const dbPokemonID = await Pokemon.findOne({
        where: {
          id: idPokemon,
        },
        include: {
          model: Type,
          attributes: ["name"],
        },
      });

      const formatIDpokemon = {
        id: dbPokemonID.id,
        name:
          dbPokemonID.name.trim().toLowerCase().charAt(0).toUpperCase() +
          dbPokemonID.name.substring(1),
        health: dbPokemonID.health,
        attack: dbPokemonID.attack,
        defense: dbPokemonID.defense,
        speed: dbPokemonID.speed,
        height: dbPokemonID.height,
        weight: dbPokemonID.weight,
        types: dbPokemonID.Types.map((t) => t.name),
        image: dbPokemonID.image,
      };

      if (dbPokemonID) return res.status(200).json(formatIDpokemon);
    } catch (error) {
      return res.status(404).send("No se encontró un Pokemon con ese ID");
    }
  }

  try {
    const apiPokemonID = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${idPokemon}`
    );
    const matchedPokemon = {
      id: apiPokemonID.data.id,
      name: apiPokemonID.data.name,
      health: apiPokemonID.data.stats[0].base_stat,
      attack: apiPokemonID.data.stats[1].base_stat,
      defense: apiPokemonID.data.stats[2].base_stat,
      speed: apiPokemonID.data.stats[5].base_stat,
      height: apiPokemonID.data.height,
      weight: apiPokemonID.data.weight,
      types: apiPokemonID.data.types.map((t) => t.type.name),
      image: apiPokemonID.data.sprites.other.home.front_default,
    };

    return res.status(200).json(matchedPokemon);
  } catch (error) {
    res.status(404).send("No se encontró un Pokemon con ese ID");
  }
});

module.exports = router;
