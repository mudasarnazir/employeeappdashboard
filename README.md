# Admin Panel – Attendance & Workforce Dashboard

A single‑page admin interface for managing employees, live attendance, and core HR data.
Built with **Firebase Web v10 modules**, vanilla JS, and a lightweight CSS utility theme.

---

## ✨ Key Features

| Area               | Highlights                                                           |
| ------------------ | -------------------------------------------------------------------- |
| **Authentication** | Firebase Email / Password (client‑side only)                         |
| **Dashboard**      | Real‑time KPIs (total staff, present today, on leave, pending tasks) |
| **Employees**      | Paginated table with search, dynamic column picker, modal CRUD       |
| **Attendance**     | Day filter, KPI cards, live search, Google Maps directions           |
| **Responsive**     | Works down to mobile widths with sidebar collapse                    |

---

## 🔧 Tech Stack

* **Firebase** — Hosting, Auth, Firestore, and Cloud Storage
* **Vanilla JS (ES Modules)** — No framework, only modern browser APIs
* **Remix Icon** — Icon font
* **Fetch + Cloud Functions** — Optional lightning‑fast full‑text search endpoint

---

## 📁 Repository Structure

```
/
│─ public/
│   │─ index.html          # sign‑in page
│   │─ home.html           # main admin panel
│   │─ default-user.png
│   └─ …
│─ functions/              # Cloud Functions (searchEmployees)
│─ README.md
└─ firebase.json
```

---

## 🗄️ Firestore Schema (minimum)

```text
dashboardSummaries/
  daily_<org_slug>          doc
    ├─ totalEmployees: number
    ├─ presentToday:  number
    ├─ onLeave:       number
    ├─ pendingTasks:  number
    └─ recentCheckins: [{ idNo, name, photoURL }]

companies/<org_slug>/
  employees/ <employeeId>   doc
    ├─ IDNo:        string|number
    ├─ Name:        string
    ├─ Coordinates: "lat, lng"
    ├─ …other HR fields
    └─ attendanceRecords/
         YYYY-MM-DD         doc
           ├─ contract
           ├─ locationName
           ├─ checkInTimestamp
           ├─ checkOutTimestamp
           └─ checkInLocation (GeoPoint)
```

*(Replace `<org_slug>` with your own organization slug everywhere.)*

---

## 🚀 Local Development

1. **Clone the repo**

   ```bash
   git clone https://github.com/your-org/admin-panel.git
   cd admin-panel
   ```

2. **Install Firebase CLI**

   ```bash
   npm i -g firebase-tools
   firebase login
   ```

3. **Serve**

   ```bash
   firebase emulators:start --only hosting,functions,firestore
   ```

   The app is now at **`http://localhost:5000`** (hosting) and functions at **`localhost:5001`**.

---

## 🛠️ Environment / Config

| Variable                   | Where to set                          | Notes                                    |
| -------------------------- | ------------------------------------- | ---------------------------------------- |
| `apiKey` … `measurementId` | `/public/*.html` **and** `functions/` | Firebase project config                  |
| `SEARCH_FUNCTION_URL`      | `/public/home.html`                   | Points to the deployed function endpoint |

> **Tip :** keep a `config.sample.js` committed and exclude `config.js` in `.gitignore`.

---

## 📦 Deployment

```bash
firebase deploy --only hosting,functions
```

* Hosting: `https://<project-id>.web.app`
* Functions: region defaults to `us-central1` (edit `functions/index.js` if needed)

---

## 🖊️ Contributing

1. Fork & clone.
2. Create a feature branch: `git checkout -b feat/my-feature`.
3. Commit + push + open a PR.
4. Make sure the PR description tells **what** & **why**.

---

## 📄 License

MIT — see `LICENSE`.
