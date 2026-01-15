# Expenses Tracker API

This is a solution to the [Expense Tracker API project](https://roadmap.sh/projects/expense-tracker-api) from roadmap.sh.

Boilerplate API ini dibangun menggunakan **Node.js**, **Express**, **PostgreSQL**, dan **Prisma ORM (v7)** di dalam lingkungan **Docker**.

## Fitur Utama

- **Express.js (v5)**: Framework web untuk Node.js.
- **PostgreSQL**: Database relasional.
- **Prisma v7**: ORM modern dengan Driver Adapters.
- **Docker & Docker Compose**: Arsitektur containerized untuk pengembangan yang konsisten.

## Prasyarat

- [Docker](https://www.docker.com/products/docker-desktop/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Cara Menjalankan Project

1. **Masuk ke folder project:**

   ```bash
   cd expenses-tracker-api
   ```

2. **Jalankan dengan Docker Compose:**
   ```bash
   docker-compose up --build
   ```
   _Perintah ini akan membangun image Node.js, menjalankan container database PostgreSQL, dan menghubungkan keduanya._

## Manajemen Database (Prisma v7)

Konfigurasi Prisma v7 menggunakan file `prisma.config.ts` dan Driver Adapter untuk koneksi database.

### 1. Inisialisasi & Sync Database

Secara default, project akan menjalankan `prisma db push` setiap kali container dijalankan. Untuk menjalankan manual:

```bash
docker-compose exec app npx prisma db push
```

### 2. Memperbarui Schema

Setiap kali Anda mengubah `prisma/schema.prisma`:

1. **Push perubahan:**
   ```bash
   docker-compose exec app npx prisma db push
   ```
2. **Generate Client:**
   ```bash
   docker-compose exec app npx prisma generate
   ```

### 3. Prisma Studio (GUI)

Gunakan antarmuka visual untuk mengelola data:

```bash
docker-compose exec app npx prisma studio
```

Buka: [http://localhost:5555](http://localhost:5555)

## API Endpoints

- **Health Check**: `GET http://localhost:3000/`
- **DB Connection Test**: `GET http://localhost:3000/db-test` (Cek status koneksi Prisma)
- **Create Expense**: `POST http://localhost:3000/expenses`

## URL Project

[https://roadmap.sh/projects/expense-tracker-api](https://roadmap.sh/projects/expense-tracker-api)
