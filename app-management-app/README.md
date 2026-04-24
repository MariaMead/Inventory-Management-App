## Local Setup

### Prerequisites

Make sure these are installed on your machine:

* Node.js
* npm
* Docker Desktop

---

### 1. Clone the repository

```bash
git clone https://github.com/mariamead/Inventory-Management-App
cd app-management-app
```

---

### 2. Install dependencies

From the root of the project:

```bash
npm install
```

---

### 3. Environment Variables

#### Frontend (`apps/frontend/.env`)

```env
VITE_API_BASE_URL="ViteURL"
```

#### Backend (`apps/backend/.env`)

```env
PORT= "Port"
FRONTEND_URL= "FrontendURL"
DATABASE_URL= "databaseURL"
```

---

### 4. Start the database

From the root of the project:

```bash
docker compose up -d
```

---

### 5. Apply migrations

From the backend folder:

```bash
cd apps/backend
npx prisma migrate deploy --schema=prisma/schema.prisma
```

---

### 6. Seed the database

```bash
npx prisma db seed --schema=prisma/schema.prisma
```

---

### 7. Run the application

From the root of the project:

```bash
cd ../..
npm run dev
```

This will start:

* Frontend: http://localhost:5173
* Backend: http://localhost:3000

---

### Notes

* Docker Desktop must be running before starting the database
* Use `prisma migrate deploy` (not `migrate dev`) to avoid creating new migrations
* Make sure port 3000 is not already in use before starting the backend
