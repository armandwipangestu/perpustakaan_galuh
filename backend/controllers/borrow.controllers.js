import BorrowBooks from "../models/borrow.models.js";

export const getBorrows = async (req, res) => {
  try {
    const response = await BorrowBooks.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getBorrowById = async (req, res) => {
  try {
    const response = await BorrowBooks.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createBorrow = async (req, res) => {
  try {
    await BorrowBooks.create(req.body);
    res.status(201).json({ message: "Loan Added" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateBorrow = async (req, res) => {
  try {
    await BorrowBooks.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Loan Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteBorrow = async (req, res) => {
  try {
    await BorrowBooks.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Loan Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
