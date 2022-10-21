import Anggota from "../models/anggota.models.js";

export const getUsers = async (req, res) => {
  try {
    const response = await Anggota.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getUserById = async (req, res) => {
  try {
    const response = await Anggota.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createUser = async (req, res) => {
  try {
    await Anggota.create(req.body);
    res.status(201).json({ message: "User Added" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    await Anggota.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "User Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    await Anggota.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "User Delete" });
  } catch (error) {
    console.log(error.message);
  }
};
