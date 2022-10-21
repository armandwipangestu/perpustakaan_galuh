import express from "express";
import cors from "cors";
import LibraryRoute from "./routes/library.routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(LibraryRoute);

app.listen(5000, () => {
  console.log("Server up and running on localhost:5000");
});
