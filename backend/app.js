import express from "express";
import cors from "cors";
import BukuRoute from "./routes/buku.routes.js";
import AnggotaRoute from "./routes/anggota.routes.js";
import PengarangRoute from "./routes/pengarang.routes.js";
import PenerbitRoute from "./routes/penerbit.routes.js";
import PeminjamRoute from "./routes/peminjam.routes.js";
import PengembalianBuku from "./routes/pengembalian.routes.js";

import * as http from "http";
import * as https from "https";
import * as fs from 'node:fs';
const privateKey = fs.readFileSync('sslcert/server.key', 'utf8');
const certificate = fs.readFileSync('sslcert/server.crt', 'utf8');
const credentials = {
	key: privateKey,
	cert: certificate,
};

const options = {
	key: '',
	cert: '',
};

const app = express();
app.use(cors());
app.use(express.json());
app.use(BukuRoute);
app.use(PeminjamRoute);
app.use(AnggotaRoute);
app.use(PengarangRoute);
app.use(PenerbitRoute);
app.use(PeminjamRoute);
app.use(PengembalianBuku);

//app.listen(5000, () => {
//  console.log("Server up and running on localhost:5000");
//});
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(4900);
httpsServer.listen(5000);
