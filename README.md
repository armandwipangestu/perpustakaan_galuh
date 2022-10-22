<h1 align="center">Perpustakaan Galuh</h1>
<p align="center">Sebuah repository yang berisi aplikasi perpustakaan berbasis website</p>

### Daftar Isi

- [Teknologi Yang Digunakan](https://github.com/armandwipangestu/perpustakaan_galuh#teknologi-yang-digunakan)
- [Menjalankan di Localhost](https://github.com/armandwipangestu/perpustakaan_galuh#menjalankan-di-localhost)
- [API Information](https://github.com/armandwipangestu/perpustakaan_galuh#api-information)
- [Fitur](https://github.com/armandwipangestu/perpustakaan_galuh#fitur)
- [Preview](https://github.com/armandwipangestu/perpustakaan_galuh#preview)

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

- Buat Database `perpustakaan_galuh`

```sql
CREATE DATABASE perpustakaan_galuh;
```

- Import File Database dummy di dalam folder `backend/database/perpustakaan_galuh.sql`

- Sesuaikan Konfigurasi Database di dalam file `backend/config/database.config.js`

```javascript
const db_name = "perpustakaan_galuh";
const db_host = "localhost";
const db_user = "root";
const db_pass = "";
const db_vendor = "mysql";
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

- Sesuaikan Konfigurasi `BASEURL` di dalam file `frontend/.env`

```env
REACT_APP_BASEURL = "http://localhost:5000"
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

### Fitur

- Menyimpan Data:

  - Anggota
  - Pengarang
  - Penerbit
  - Buku
  - Transaksi Peminjaman
  - Transaksi Pengembalian

- Filter / Searching

### Preview
