# Spark Security Services – Admin Panel

A lightweight dashboard for managing **employees, attendance and daily KPIs** for Spark Security Services.
The app is a single‑page **HTML + vanilla JS** front‑end running entirely on Firebase (Auth, Firestore, Storage and Cloud Functions).

---

## ✨ Features

| Area              | Highlights                                                                                                                              |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Dashboard**     | real‑time counters (total employees, today’s presence, leave, pending tasks) & recent photo check‑ins                                   |
| **Employees**     | server‑side pagination (Firestore), instant filtering/search (Cloud Function), inline column picker, add/edit modal                     |
| **Attendance**    | date selector, KPI cards that filter the table, live search, cached reads, one‑click Google Maps directions (assigned ▼ vs. check‑in ▲) |
| **Auth**          | Firebase Email/Password (or any Auth provider) with persistent session & secure logout                                                  |
| **Responsive UI** | collapsible sidebar, mobile‑first layout, RemixIcon icon‑set                                                                            |

---

## 🛠 Tech Stack

* **Firebase v10 modular SDK** – Auth, Firestore, Storage
* **Cloud Functions** – `searchEmployees` full‑text endpoint
* **HTML / CSS** (no frameworks, Tailwind‑like utility palette)
* **Vanilla JavaScript (ES Modules)**

The panel is a **static site** – no build step required.

---

## 🔧 Prerequisites

| Tool             | Version | Notes                                  |
| ---------------- | ------- | -------------------------------------- |
| **Node.js**      | ≥ 16    | only for deploying Functions / Hosting |
| **Firebase CLI** | ≥ 12    | `npm i -g firebase-tools`              |

---

## 🚀 Local Setup

```bash
# 1. Clone the repo
$ git clone https://github.com/<your‑org>/spark‑admin‑panel.git
$ cd spark‑admin‑panel

# 2. Install functions deps (optional)
$ cd functions && npm install && cd ..

# 3. Serve the static site
$ npx live-server          # or any static dev server
```

> The SPA contains **hard‑coded `firebaseConfig`**. Replace it with your own keys or inject via build‑time env vars if you prefer.

---

## 📂 Firebase Schema

```
companies/{COMPANY}/employees/{EMP_ID}
└─ attendanceRecords/{YYYY‑MM‑DD}

dashboardSummaries/daily_{COMPANY}
employeeProfilePhotos/{EMP_ID}.jpg   (Storage)
```

### Cloud Function – `searchEmployees`

Receives `company`, `field` and `term` query params and returns a filtered list used by the Employees live search box.

---

## 🏗 Deploy

```bash
# Login & initialise (first time only)
$ firebase login
$ firebase init hosting functions

# Build – not required (pure JS)

# Deploy both hosting & functions
$ firebase deploy
```

The panel will be available at the hosting URL provided by Firebase.

---

## 🖼 Screenshots

| Dashboard | Attendance (Map link) |
| --------- | --------------------- |
| (add.png) | (attendance.png)      |

---

## 🙋 Contributing

1. Fork the repo & create a feature branch
2. Commit your changes (`git commit -m 'feat: add X'`)
3. Push to your branch and open a Pull Request

---

## 📄 License

[MIT](LICENSE)
