import PengembalianBuku from "../models/pengembalian.models.js";

export const getPengembalians = async (req, res) => {
  try {
    const response = await PengembalianBuku.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getPengembalianById = async (req, res) => {
  try {
    const response = await PengembalianBuku.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createPengembalian = async (req, res) => {
  try {
    await PengembalianBuku.create(req.body);
    res.status(201).json({ message: "Pengembalian Added" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePengembalian = async (req, res) => {
  try {
    await PengembalianBuku.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Pengembalian Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePengembalian = async (req, res) => {
  try {
    await PengembalianBuku.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Pengembalian Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
