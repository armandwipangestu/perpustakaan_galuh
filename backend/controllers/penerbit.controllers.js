import Penerbit from "../models/penerbit.models.js";

export const getPenerbits = async (req, res) => {
  try {
    const response = await Penerbit.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getPenerbitById = async (req, res) => {
  try {
    const response = await Penerbit.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createPenerbit = async (req, res) => {
  try {
    await Penerbit.create(req.body);
    res.status(201).json({ message: "Penerbit Added" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePenerbit = async (req, res) => {
  try {
    await Penerbit.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Penerbit Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePenerbit = async (req, res) => {
  try {
    await Penerbit.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Penerbit Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
