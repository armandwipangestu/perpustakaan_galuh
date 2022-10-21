import express from "express";
import cors from "cors";
import BookRoute from "./routes/book.routes.js";
import LoanRoute from "./routes/load.routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(BookRoute);
app.use(LoanRoute);

app.listen(5000, () => {
  console.log("Server up and running on localhost:5000");
});
