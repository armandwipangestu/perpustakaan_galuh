<h1 align="center">Perpustakaan Galuh</h1>
<p align="center">Sebuah repository yang berisi aplikasi perpustakaan berbasis website</p>

### Teknologi Yang Digunakan

| Backend | Frontend |
| ------- | -------- |
| MySQL   | ReactJS  |
| Express |
| NodeJS  |

### Menjalankan di Localhost

- Clone Repository

```bash
git clone https://github.com/armandwipangestu/perpustakaan_galuh
```

<details>
<summary>Back End</summary>

- Pindah ke dalam folder projek

```bash
cd perpustakaan_galuh/backend
```

- Install ketergantungan Library

```bash
yarn install
```

```bash
yarn add -g nodemon
```

- Menjalankan Backend Server

```bash
nodemon app
```

> **NOTE**: Backend Berjalan di `localhost:5000`

</details>

<details>
<summary>Front End</summary>

- Pindah ke dalam folder projek

```bash
cd perpustakaan_galuh/frontend
```

- Install ketergantungan Library

```bash
yarn install
```

- Menjalankan Frontend Server

```bash
yarn start
```

> **NOTE**: Frontend Berjalan di `localhost:3000`

</details>

### API Information

- Anggota / Users

| Endpoint         | METHOD |
| ---------------- | ------ |
| `/api/users`     | GET    |
| `/api/users/:id` | GET    |
| `/api/users`     | POST   |
| `/api/users/:id` | PATCH  |
| `/api/users/:id` | DELETE |

- Pengarang / Author

| Endpoint              | METHOD |
| --------------------- | ------ |
| `/api/pengarangs`     | GET    |
| `/api/pengarangs/:id` | GET    |
| `/api/pengarangs`     | POST   |
| `/api/pengarangs/:id` | PATCH  |
| `/api/pengarangs/:id` | DELETE |

- Penerbit / Publisher

| Endpoint             | METHOD |
| -------------------- | ------ |
| `/api/penerbits`     | GET    |
| `/api/penerbits/:id` | GET    |
| `/api/penerbits`     | POST   |
| `/api/penerbits/:id` | PATCH  |
| `/api/penerbits/:id` | DELETE |

- Buku / Books

| Endpoint         | METHOD |
| ---------------- | ------ |
| `/api/books`     | GET    |
| `/api/books/:id` | GET    |
| `/api/books`     | POST   |
| `/api/books/:id` | PATCH  |
| `/api/books/:id` | DELETE |

- Peminjam

| Endpoint             | METHOD |
| -------------------- | ------ |
| `/api/peminjams`     | GET    |
| `/api/peminjams/:id` | GET    |
| `/api/peminjams`     | POST   |
| `/api/peminjams/:id` | PATCH  |
| `/api/peminjams/:id` | DELETE |

- Pengembalian

| Endpoint                 | METHOD |
| ------------------------ | ------ |
| `/api/pengembalians`     | GET    |
| `/api/pengembalians/:id` | GET    |
| `/api/pengembalians`     | POST   |
| `/api/pengembalians/:id` | PATCH  |
| `/api/pengembalians/:id` | DELETE |
