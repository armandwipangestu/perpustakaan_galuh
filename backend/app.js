import express from "express";
import cors from "cors";
import BookRoute from "./routes/book.routes.js";
import BorrowRoute from "./routes/borrow.routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(BookRoute);
app.use(BorrowRoute);

app.listen(5000, () => {
  console.log("Server up and running on localhost:5000");
});
