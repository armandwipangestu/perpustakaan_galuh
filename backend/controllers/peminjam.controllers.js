import PeminjamBuku from "../models/peminjam.models.js";

export const getPeminjams = async (req, res) => {
  try {
    const response = await PeminjamBuku.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getPeminjamById = async (req, res) => {
  try {
    const response = await PeminjamBuku.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createPeminjam = async (req, res) => {
  try {
    await PeminjamBuku.create(req.body);
    res.status(201).json({ message: "Peminjam Added" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePeminjam = async (req, res) => {
  try {
    await PeminjamBuku.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Peminjam Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePeminjam = async (req, res) => {
  try {
    await PeminjamBuku.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Peminjam Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
