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
        inv_id: i.id,
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
