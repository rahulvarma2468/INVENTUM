# INVENTUM 2K26 - The Upside Down Edition 🌌

> **"Friends don't lie." But this website is the truth.**
> 
> Welcome to the official website for **INVENTUM 2K26**, the Annual Tech Symposium of ANITS (Dept of CSE-AIML & CSM).

![Inventum Banner](/public/images/final%20logo2.png)

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

## 🛠️ Built With

*   ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) **React 18+**
*   ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) **Vite** (Blazing fast build tool)
*   ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white) **Framer Motion**
*   **Vanilla CSS3** (Custom Variables, Flexbox/Grid, Keyframe Animations)

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

**Rahul varma Mudunuru** (Fest Convenor)
*   Phone: 8125013863

**Email**: inventum@anits.edu.in

---

*"Something is coming. Something hungry for blood. A shadow grows on the wall behind you, swallowing you in darkness."*

**© 2026 INVENTUM Team**
