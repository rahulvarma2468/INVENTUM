<div align="center">

  <img src="public/images/final%20logo2.png" alt="Inventum Banner" width="100%" />

  # INVENTUM 2K26 - The Upside Down Edition 🌌

  > **"Friends don't lie." But this website is the truth.**

  Welcome to the official website for **INVENTUM 2K26**, the Annual Tech Symposium of ANITS (Dept of CSE-AIML & CSM).

  <p>
    <a href="https://reactjs.org/">
      <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    </a>
    <a href="https://vitejs.dev/">
      <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    </a>
    <a href="https://www.framer.com/motion/">
      <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
    </a>
  </p>

  <p>
    <a href="#-about-the-project">About The Project</a> •
    <a href="#-features">Features</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-contact">Contact</a>
  </p>

</div>

<br />

## 🕹️ About The Project

INVENTUM 2K26 is not just a fest; it's an experience. We've built a fully immersive, **"Stranger Things" themed** web application to showcase our events, gallery, and team. 

The site features:
*   **The Upside Down Aesthetic**: Deep atmospheric red/black gradients, animated fog layer, and floating "spore" particles.
*   **Retro Typography**: Custom implementation of the iconic **ITC Benguiat** font for that 80s horror vibe.
*   **Dynamic Visuals**: Glitch effects, neon text glows, and CRT scanlines.
*   **Smooth Animations**: Powered by **Framer Motion** for seamless page transitions and scroll reveals.

## 🚀 Features

*   **Landing Page**: Live countdown timer to the "Breach" (Jan 8, 2026) with key event info.
*   **Dashboard**: Central hub to navigate to various dimensions (pages).
*   **Events**: Detailed listings for:
    *   **Technical**: Hackathons, Paper Presentations, etc.
    *   **Non-Technical**: Fun events, Art, Photography.
*   **Memories (Gallery)**: A yearly archive of our best moments.
    *   Section-wise layout for **2023, 2024, 2025**.
    *   "Coming Soon" teaser for **2026**.
    *   Interactive Photo Lightbox.
*   **The Team**: Meet the HOD, Faculty, and Student Convenors behind the magic.
*   **Responsive**: Optimized for mobile and desktop screens.

## 📂 Project Structure

```bash
inventum-react/
├── public/
│   ├── images/          # Assets (Logos, Team photos, Event pics)
└── src/
    ├── components/
    │   ├── Layout.jsx   # Core wrapper (Fog, Particles, Navbar)
    │   ├── Navbar.jsx   # Top navigation
    │   ├── Lightbox.jsx # Image viewer
    │   └── ...
    ├── pages/
    │   ├── Index.jsx    # Home (Countdown)
    │   ├── Dashboard.jsx
    │   ├── TechnicalEvents.jsx
    │   ├── NonTechnicalEvents.jsx
    │   ├── Gallery.jsx  # Memories
    │   └── Contact.jsx  # The Team
    ├── styles/
    │   ├── index.css    # Globalvars, Typography, Backgrounds
    │   ├── Landing.css  # Hero section styles
    │   └── ...
    ├── App.jsx          # Routing & Logic
    └── main.jsx         # Entry point
```

## ⚡ Getting Started

### Prerequisites

*   Node.js (v16 or higher)
*   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/rahulvarma2468/INVENTUM.git
    cd INVENTUM/inventum-react
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the local server**
    ```bash
    npm run dev
    ```

4.  **Enter the Gate**
    Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🚢 Deployment

This project is optimized for deployment on platforms like Vercel or Netlify.

**Build for production:**
```bash
npm run build
```

**Preview production build:**
```bash
npm run preview
```

## 📅 Event Details

*   **Dates**: January 8th & 9th, 2026
*   **Location**: Anil Neerukonda Institute of Technology and Sciences (ANITS), Visakhapatnam.
*   **Dept**: CSE - AI & ML.

## 📞 Contact

<div align="center">

**Rahul varma Mudunuru** (Fest Convenor)  
📞 8125013863

**Email**: inventum@anits.edu.in

</div>

---

<div align="center">
  <p><em>"Something is coming. Something hungry for blood. A shadow grows on the wall behind you, swallowing you in darkness."</em></p>
  <p><strong>© 2026 INVENTUM Team</strong></p>
</div>
