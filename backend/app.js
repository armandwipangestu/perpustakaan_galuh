import express from "express";
import cors from "cors";
import BukuRoute from "./routes/buku.routes.js";
import PeminjamRoute from "./routes/peminjam.routes.js";
import AnggotaRoute from "./routes/anggota.routes.js";
import PengarangRoute from "./routes/pengarang.routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(BukuRoute);
app.use(PeminjamRoute);
app.use(AnggotaRoute);
app.use(PengarangRoute);

app.listen(5000, () => {
  console.log("Server up and running on localhost:5000");
});
