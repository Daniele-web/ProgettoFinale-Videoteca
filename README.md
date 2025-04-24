# 🦝 RaccoonVideoteca

**POC di un e-commerce fullstack**:

- **Frontend**: ReactJS + Redux
- **Backend**: NodeJS + ExpressJS
- **Database**: MongoDB (Mongoose ODM)
- **Container**: Docker + Docker Compose

---

## 📂 Struttura del progetto

### 📌 Frontend (`frontend/`)

- **public/** – File statici pubblici (index.html, favicon, etc).
- **src/** – Codice sorgente dell’app React:
  - `adapters/`: layer di adattamento (API calls, formatting dati).
  - `components/`: componenti React riutilizzabili.
  - `pages/`: pagine principali dell'app.
  - `repositories/`: gestione chiamate API e logica dati.
  - `stores/`: gestione globale dello stato (Redux store).
  - `types/`: definizione di tipi e interfacce Typescript.
  - Altri file utili (App.tsx, index.tsx, immagini, ecc).

### 📌 Backend (`node/`)

- **bin/** – file per esecuzione build e avvio server.
- **database/** – Logica di persistenza:
  - `controllers/`: funzioni per la gestione logica dei dati.
  - `models/`: schemi dei dati (Mongoose models).
  - `validators/`: validazione dei dati.
  - `connection.js`: connessione a MongoDB.
- **public/** – eventuali risorse statiche.
- **routes/** – definizione degli endpoint API.
- `app.js`: file principale di configurazione Express.
- Dockerfile e docker-compose.yml per orchestrazione dei container.

---

## 🛠 Requisiti

- Permessi di root o sudo
- Supporto a `bash`, `curl` e `dpkg`
- Docker e Docker Compose (automaticamente installati su Linux/Mac se assenti)

---

## 📦 Installazione

### 1. Estrai l’archivio

Dopo l'estrazione accedi alla cartella:

```bash
cd raccoon-dealer
```

### 2. Cartella database `mdb_data`

Questa cartella mantiene i dati del database.

```bash
mkdir mdb_data
sudo chmod 777 mdb_data
```

📌 Assicurati che `mdb_data` sia alla **root del progetto** (accanto a `setup.sh`).

---

## ▶️ Avvio automatico (Linux/MacOS)

```bash
./setup.sh
```

Lo script:
- Verifica e installa Docker + Docker Compose (Linux e Mac)
- Su Mac, gestisce anche **Colima**
- Avvia i container tramite `docker-compose`

Server disponibile su: **http://localhost:3005**  
Ferma con: `CTRL + C`

---

## 🪟 Installazione Windows (manuale)

### 1. Installa Docker Desktop

Scarica da: https://www.docker.com/products/docker-desktop/

### 2. Estrai archivio e prepara `mdb_data` (se non esiste già)

Apri PowerShell o Git Bash:

```bash
cd path\to\raccoon-dealer
mkdir mdb_data
```

### 3. Permessi cartella (PowerShell)

```powershell
icacls mdb_data /grant Everyone:(OI)(CI)F
```

### 4. Avvia Docker Desktop

### 5. Avvia i container

```bash
docker-compose up
```

Server disponibile su: **http://localhost:3005**
