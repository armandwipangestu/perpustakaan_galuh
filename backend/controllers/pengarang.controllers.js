import Pengarang from "../models/pengarang.models.js";

export const getPengarangs = async (req, res) => {
  try {
    const response = await Pengarang.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getPengarangById = async (req, res) => {
  try {
    const response = await Pengarang.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createPengarang = async (req, res) => {
  try {
    await Pengarang.create(req.body);
    res.status(201).json({ message: "Pengarang Added" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePengarang = async (req, res) => {
  try {
    await Pengarang.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Pengarang Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePengarang = async (req, res) => {
  try {
    await Pengarang.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Pengarang Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
