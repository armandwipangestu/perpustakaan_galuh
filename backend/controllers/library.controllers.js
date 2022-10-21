import LibraryBooks from "../models/library.models.js";

export const getBooks = async (req, res) => {
  try {
    const response = await LibraryBooks.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getBookById = async (req, res) => {
  try {
    const response = await LibraryBooks.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {}
};

export const createBook = async (req, res) => {
  try {
    await LibraryBooks.create(req.body);
    res.status(201).json({ message: "Book Added" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateBook = async (req, res) => {
  try {
    await LibraryBooks.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Book Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteBook = async (req, res) => {
  try {
    await LibraryBooks.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Book Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
