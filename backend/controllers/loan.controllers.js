import LoanBooks from "../models/loan.models.js";

export const getLoans = async (req, res) => {
  try {
    const response = await LoanBooks.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getLoanById = async (req, res) => {
  try {
    const response = await LoanBooks.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createLoan = async (req, res) => {
  try {
    await LoanBooks.create(req.body);
    res.status(201).json({ message: "Loan Added" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateLoan = async (req, res) => {
  try {
    await LoanBooks.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Loan Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteLoan = async (req, res) => {
  try {
    await LoanBooks.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Loan Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
