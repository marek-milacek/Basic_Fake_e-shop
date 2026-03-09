# E-Shop

A modern e-commerce application built as part of the Project Odin curriculum. This project demonstrates proficiency in building full-featured React applications with routing, state management, and API integration.

## Project Overview

E-Shop is a functional e-commerce platform that fetches products from a third-party API and allows users to browse products and manage a shopping cart. The application features a clean, modern UI with responsive design and smooth user experience.

## Features

- **Product Browsing** – Display products from FakeStore API with detailed information
- **Shopping Cart** – Add and remove products from cart with real-time updates
- **Responsive Design** – Mobile-first approach with responsive grid layouts
- **Client-Side Routing** – Navigate between Home, Products, and Cart pages seamlessly
- **Modern UI** – Professional design with smooth transitions and hover effects
- **Real API Integration** – Fetches live product data from FakeStore API

## Technology Stack

- **Frontend Framework:** React 19.2.0
- **Build Tool:** Vite 7.3.1
- **Routing:** React Router DOM 7.13.1
- **HTTP Client:** Axios 1.13.6
- **Styling:** Tailwind CSS 4.2.1
- **Icons:** Lucide React 0.577.0
- **Code Quality:** ESLint 9.39.1
- **Plugin:** Vite React SWC 4.2.2 (for Fast Refresh)

## Project Structure

```
e-shop_2.0/
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Navigation header with cart link
│   │   ├── Footer.jsx        # Footer with shop info and newsletter
│   │   ├── Hero.jsx          # Hero section for homepage
│   │   └── Features.jsx      # Features section
│   ├── pages/
│   │   ├── Home.jsx          # Landing page with hero section
│   │   ├── Products.jsx      # Product listing page with API integration
│   │   └── Cart.jsx          # Shopping cart display
│   ├── App.jsx               # Main app component with routing context
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global styles
├── public/                   # Static assets
├── package.json              # Project dependencies
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint configuration
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/marek-milacek/Basic_Fake_e-shop.git
    cd e-shop_2.0
    ```
2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```
3. Start the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` – Start development server with HMR
- `npm run build` – Build for production
- `npm run preview` – Preview production build
- `npm run lint` – Run ESLint to check code quality

## Key Learning Outcomes

This project demonstrates:

- React Hooks (useState, useEffect) for state management
- React Router DOM for client-side navigation
- Context API for passing data between components
- Axios for HTTP requests and API integration
- Component composition and reusable components
- Tailwind CSS for modern, responsive styling
- Working with third-party APIs (FakeStore API)

## 📝 License

This project is open source and available under the MIT License.

Built for Project Odin
