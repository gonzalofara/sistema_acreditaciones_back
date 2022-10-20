const { Router } = require("express");
const router = Router(); //express.Router('')
const { Invitados, Evento } = require("../db");
const axios = require("axios");
const { Op, where } = require("sequelize");

router.post("/:id", async (req, res) => {
  let { id } = req.params;

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
    let instancia = await Invitados.bulkCreate(nuevaLista);
    let evento = await Evento.findOne({ where: { id: id } });
    // console.log("INVITADOSSS", instancia);
    // console.log("EVENTOOO", evento);
    instancia.forEach(async (i) => await i.addEvento(evento.id));
    // let assignTypes = await Promise.all(
    //   types.map((t) => Type.findOne({ where: { name: t } }))
    // );

    return res.status(201).json(instancia);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      console.log("aca");
      let invitadosDb = await Invitados.findAll();

      return res.status(200).json(invitadosDb);
    } else if (id) {
      console.log("entre al iffffff");
      let invitado = await Invitados.findOne({
        where: { id: id },
        include: {
          model: Evento,
          attributes: ["nombre"],
        },
      });
      return res.status(200).json(invitado);
    }
  } catch (error) {
    return res.status(404).send(error.message);
  }
});

// router.get("/:idPokemon", async (req, res) => {
//   const { idPokemon } = req.params;

//   if (idPokemon.length > 4) {
//     try {
//       const dbPokemonID = await Pokemon.findOne({
//         where: {
//           id: idPokemon,
//         },
//         include: {
//           model: Type,
//           attributes: ["name"],
//         },
//       });

//       const formatIDpokemon = {
//         id: dbPokemonID.id,
//         name:
//           dbPokemonID.name.trim().toLowerCase().charAt(0).toUpperCase() +
//           dbPokemonID.name.substring(1),
//         health: dbPokemonID.health,
//         attack: dbPokemonID.attack,
//         defense: dbPokemonID.defense,
//         speed: dbPokemonID.speed,
//         height: dbPokemonID.height,
//         weight: dbPokemonID.weight,
//         types: dbPokemonID.Types.map((t) => t.name),
//         image: dbPokemonID.image,
//       };

//       if (dbPokemonID) return res.status(200).json(formatIDpokemon);
//     } catch (error) {
//       return res.status(404).send("No se encontró un Pokemon con ese ID");
//     }
//   }

//   try {
//     const apiPokemonID = await axios.get(
//       `https://pokeapi.co/api/v2/pokemon/${idPokemon}`
//     );
//     const matchedPokemon = {
//       id: apiPokemonID.data.id,
//       name: apiPokemonID.data.name,
//       health: apiPokemonID.data.stats[0].base_stat,
//       attack: apiPokemonID.data.stats[1].base_stat,
//       defense: apiPokemonID.data.stats[2].base_stat,
//       speed: apiPokemonID.data.stats[5].base_stat,
//       height: apiPokemonID.data.height,
//       weight: apiPokemonID.data.weight,
//       types: apiPokemonID.data.types.map((t) => t.type.name),
//       image: apiPokemonID.data.sprites.other.home.front_default,
//     };

//     return res.status(200).json(matchedPokemon);
//   } catch (error) {
//     res.status(404).send("No se encontró un Pokemon con ese ID");
//   }
// });

router.delete("/delete/:id", async (req, res) => {
  console.log("ESTOYY EN EL DELETEEEEEEE");
  const { id } = req.params;
  console.log(id);
  try {
    await Invitados.destroy({ where: { id: id } });
    res.status(200).send("Invitado borrado con exito");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
