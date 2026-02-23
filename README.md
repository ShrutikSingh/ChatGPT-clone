# 🤖 ChatGPT Clone | Frontend Focus

A sleek, responsive ChatGPT clone built with a focus on **modular component architecture**, clean frontend structure, and professional UI design using **Material UI (MUI)**.

---

## 📸 Screenshots

| Desktop View | Mobile Experience |
| :---: | :---: |
| ![Main Dashboard](./screenshots/desktop-main.png) | ![Mobile Sidebar](./screenshots/mobile-view.png) |
| *Clean, minimalist chat interface* | *Fully responsive drawer navigation* |

---

## ✨ Features

* **Component-Driven Development:** Built with highly reusable functional components.
* **Material UI Integration:** Leveraging MUI’s powerful Grid system, Box models, and Typography.
* **Responsive Design:** Seamless transitions between desktop, tablet, and mobile views.
* **Vite Powered:** Lightning-fast Hot Module Replacement (HMR) and optimized build performance.
* **State Management:** Efficient handling of chat history and input states.

## 🛠️ Tech Stack

* **React 18** (Functional Components & Hooks)
* **Vite** (Build Tool)
* **Material UI (MUI) v5** (Styling & Icons)
* **Emotion** (CSS-in-JS)

---

## 🏗️ Project Structure

The project follows a scalable folder structure to keep logic and presentation separate:

```text
src/
├── components/         # Reusable UI elements (Button, Input, Sidebar)
├── layout/             # Main layout wrappers (ChatContainer, Navigation)
├── theme/              # MUI custom theme configurations
├── assets/             # Images and static files
└── App.jsx             # Main entry point