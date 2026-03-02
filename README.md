# Student Management System

A full-stack Student Management System built with **.NET 8 Web API** and **React**.

## 🚀 Tech Stack

### Backend
- **Framework**: ASP.NET Core Web API (.NET 8)
- **Database**: SQLite
- **ORM**: Entity Framework Core
- **Documentation**: Swagger UI

### Frontend
- **Framework**: React (Vite)
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Styling**: CSS Modules / Global CSS

---

## 📂 Project Structure

```bash
SMS/
├── StudentManagement.API/       # Backend (.NET 8 Web API)
│   ├── Controllers/             # API Endpoints
│   ├── Data/                    # Database Context
│   ├── Migrations/              # Entity Framework Migrations
│   ├── Models/                  # Data Models
│   ├── appsettings.json         # Configuration File
│   ├── students.db              # SQLite Database File
│   └── Program.cs               # App Entry Point & Config
│
├── student-management-ui/       # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/          # Reusable Components
│   │   ├── pages/               # Page Views (List, Add, Edit)
│   │   ├── services/            # API Integration Service
│   │   ├── App.jsx              # Main React Component
│   │   ├── main.jsx             # React Entry Point
│   │   └── index.css            # Global CSS Styles
│   ├── index.html               # Main HTML Template
│   ├── package.json             # NPM dependencies & scripts
│   └── vite.config.js           # Vite server configuration
└── README.md                    # Project Documentation
```

---

## 🛠 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)

---

## 🏁 Getting Started

### 1. Backend Setup (API)

Open a terminal in the `StudentManagement.API` folder:

```bash
cd StudentManagement.API

# 1. Restore dependencies
dotnet restore

# 2. Install EF Core global tool (if not installed)
dotnet tool install --global dotnet-ef

# 3. Apply migrations and create database
dotnet ef migrations add InitialCreate
dotnet ef database update

# 4. Run the API
dotnet run
```

The API will be available at: `http://localhost:5000`  
Swagger UI: `http://localhost:5000/swagger`

### 2. Frontend Setup (UI)

Open a new terminal in the `student-management-ui` folder:

```bash
cd student-management-ui

# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev
```

The UI will be available at: `http://localhost:5173`

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/students` | Get all students |
| `GET` | `/api/students/{id}` | Get a specific student |
| `POST` | `/api/students` | Create a new student |
| `PUT` | `/api/students/{id}` | Update an existing student |
| `DELETE` | `/api/students/{id}` | Delete a student |

---

## 📝 Features

- **CRUD Operations**: Create, Read, Update, and Delete students.
- **Form Validation**: basic validation for required fields.
- **Responsive Design**: Clean and simple UI.
- **Real-time Updates**: changes reflected immediately upon action.
