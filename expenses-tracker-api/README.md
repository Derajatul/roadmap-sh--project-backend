# Expenses Tracker API

Boilerplate API menggunakan **Node.js**, **Express**, **PostgreSQL**, dan **Prisma ORM** di dalam lingkungan **Docker**.

## Prasyarat

- [Docker](https://www.docker.com/products/docker-desktop/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Cara Menjalankan Project

1. **Clone project dan masuk ke folder:**

   ```bash
   cd expenses-tracker-api
   ```

2. **Jalankan dengan Docker Compose:**
   ```bash
   docker-compose up --build
   ```
   _Perintah ini akan membangun image, menjalankan container database, dan menjalankan aplikasi Node.js._

## Manajemen Database (Prisma)

Karena aplikasi berjalan di dalam Docker, perintah Prisma harus dijalankan melalui container atau disesuaikan dengan koneksi environment.

### 1. Inisialisasi Database (Pertama Kali)

Saat pertama kali dijalankan, `Dockerfile` sudah diatur untuk menjalankan `npx prisma db push`. Ini akan:

- Sinkronisasi schema Prisma dengan database.
- Membuat tabel jika belum ada.

Jika Anda ingin melakukannya secara manual dari host (komputer Anda):

```bash
# Pastikan container berjalan
docker-compose exec app npx prisma db push
```

### 2. Memperbarui Tabel (Setelah Mengedit `schema.prisma`)

Setiap kali Anda mengubah file `prisma/schema.prisma` (misalnya menambah field atau model baru):

1. **Sinkronisasi Schema ke DB:**

   ```bash
   docker-compose exec app npx prisma db push
   ```

   _Gunakan `db push` untuk prototyping cepat. Jika ingin menggunakan sistem migration yang mencatat sejarah perubahan, gunakan `migrate dev`._

2. **Generate Ulang Prisma Client:**
   Prisma Client perlu di-generate ulang agar autocomplete di kode (IntelliSense) mendeteksi field baru.
   ```bash
   docker-compose exec app npx prisma generate
   ```

### 3. Menggunakan Prisma Studio (GUI)

Prisma Studio adalah aplikasi web untuk melihat dan mengedit data di database secara visual.

```bash
docker-compose exec app npx prisma studio
```

Lalu buka `http://localhost:5555` di browser Anda.

## Akses API

- **Base URL**: `http://localhost:3000`
- **Health Check**: `http://localhost:3000/`
- **DB Test**: `http://localhost:3000/db-test`

## Troubleshooting

Jika database belum siap saat aplikasi dijalankan, aplikasi mungkin akan error dan berhenti. Cukup jalankan kembali:

```bash
docker-compose up
```

Database PostgreSQL biasanya membutuhkan waktu beberapa detik untuk benar-benar siap menerima koneksi pada saat pertama kali dibuat.
