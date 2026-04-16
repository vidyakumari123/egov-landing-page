# eGov Landing Page

A responsive landing page built using **React** and **Bootstrap**, recreating a reference design with reusable components and interactive product filtering.

---

## 🚀 Overview

This project recreates an eGov-style landing page based on a reference design. It focuses on clean UI, component-based architecture, and basic interactivity.

### Key Features:

* Hero section with call-to-action
* Stats / impact section
* Features section
* Product listing with:

  * Search functionality
  * Category filtering
* Call-to-action section
* Supporters logo section
* Footer with links and subscription input

---

## 🛠 Tech Stack

* React (Functional Components + Hooks)
* Create React App
* Bootstrap 5
* Custom CSS (DM Sans font)

---

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   └── sections/
│       ├── Hero.jsx
│       ├── Stats.jsx
│       ├── Features.jsx
│       ├── Products.jsx
│       ├── CTA.jsx
│       └── Supporters.jsx
├── data/
│   └── products.js
├── styles/
│   └── global.css
├── App.js
└── index.js
```

---

## ⚙️ Getting Started

### Install dependencies

```bash
npm install
```

### Run the project

```bash
npm start
```

Visit: http://localhost:3000

---

## 📦 Build for Production

```bash
npm run build
```

---

## ✨ Additional Notes

* Product data is mocked using local JSON.
* Filtering is handled client-side using React state.
* Dummy/local images are used as per assignment requirements.
* Basic hover effects and UI enhancements are included.

---

## 📌 Assignment Context

This project was created as part of a technical assignment to:

* Recreate a landing page based on a reference image
* Use React functional components and hooks
* Implement product filtering and search
* Maintain clean UI and responsive layout

---

## 📄 License

This project is for educational/assignment purposes.
