<h1 align="center">Perpustakaan Galuh</h1>
<p align="center">Sebuah repository yang berisi aplikasi perpustakaan berbasis website</p>

### Daftar Isi

- [Teknologi Yang Digunakan](https://github.com/armandwipangestu/perpustakaan_galuh#teknologi-yang-digunakan)
- [Menjalankan di Localhost](https://github.com/armandwipangestu/perpustakaan_galuh#menjalankan-di-localhost)
- [API Information](https://github.com/armandwipangestu/perpustakaan_galuh#api-information)
- [Fitur](https://github.com/armandwipangestu/perpustakaan_galuh#fitur)
- [Preview](https://github.com/armandwipangestu/perpustakaan_galuh#preview)
- [Kekurangan](https://github.com/armandwipangestu/perpustakaan_galuh#kekurangan)

### Teknologi Yang Digunakan

| Backend | Frontend     |
| ------- | --------     |
| MySQL   | ReactJS      |
| Express | Tailwind CSS |
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
yarn global add nodemon
```

- Buat Database `perpustakaan_galuh`

```sql
CREATE DATABASE perpustakaan_galuh;
```

- Import File Database dummy di dalam folder `backend/database/perpustakaan_galuh.sql`

- Sesuaikan Konfigurasi Database di dalam file `backend/.env` dan `backend/config/.env`

```bash
DB_NAME="perpustakaan_galuh"
DB_HOST="localhost"
DB_PORT="3306"
DB_USER="root"
DB_PASS=""
DB_VENDOR="mysql"
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

- Beranda / Home Page

https://user-images.githubusercontent.com/64394320/197359697-4dc952e6-3306-47e5-9491-e4ce85417ec2.mp4

- User

https://user-images.githubusercontent.com/64394320/197360428-24e0e3d3-3143-405c-a4f2-05ae58dd6a04.mp4

- Pengarang

https://user-images.githubusercontent.com/64394320/197360452-c33b1fd9-41c8-4703-a272-0c97ff8360d3.mp4

- Penerbit

https://user-images.githubusercontent.com/64394320/197360461-d0bee3b1-90de-4516-a791-02b2f62be3d6.mp4

- Buku

https://user-images.githubusercontent.com/64394320/197360478-5c1637ec-3022-4ecd-90b9-703e14e9c795.mp4

- Peminjam

https://user-images.githubusercontent.com/64394320/197360495-ab2969ae-f842-422b-9fcf-68501ec500c9.mp4

- Pengembalian

https://user-images.githubusercontent.com/64394320/197360509-d3d9e83b-7d2d-4b25-8072-1feee36d0a85.mp4

### Kekurangan

Aplikasi ini masih banyak kekurangannya :D seperti relasi antar tabel nya belum saling terhubung. Karena keterbatasan saya dalam skill SQL nya (belum belajar relasi antar tabel)
