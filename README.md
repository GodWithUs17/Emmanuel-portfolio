# Emmanuel Oguntoke — Full-Stack Web Developer Portfolio 🚀

A modern full-stack developer portfolio built to showcase my approach to designing and building fast, responsive, conversion-focused websites and web applications.

The portfolio combines a polished React frontend with a custom backend API, database integration, contact automation, bot protection, and production deployment configuration.

Rather than functioning as a simple collection of projects, the portfolio is designed to demonstrate how I approach real-world web development — from user experience and responsive interfaces to backend architecture, data handling, security, and deployment.

---

## 🎯 What This Portfolio Represents

I build websites and web applications with a focus on three things:

- **Conversion** — turning visitors into customers, leads, or users
- **Performance** — building fast and responsive experiences
- **Scalability** — creating foundations that can grow with the business

My goal is to combine clean user interfaces with reliable engineering so that a website is not only visually appealing, but also useful to the business behind it.

---

## ✨ Key Features

### Modern Frontend Experience

- Responsive React interface
- Vite-powered development and production builds
- Tailwind CSS styling
- Reusable component architecture
- Responsive layouts across desktop, tablet, and mobile
- Optimized image formats including WebP and AVIF
- Clear calls-to-action throughout the user journey

### Project Showcase

The portfolio presents selected projects with an emphasis on:

- The problem being solved
- The solution implemented
- Technologies used
- Real-world functionality
- Business and user value

### Full-Stack Contact System

The contact section is connected to a custom backend API rather than relying solely on a frontend form.

The system handles:

- Contact form submissions
- Input validation
- Email notifications
- Inquiry processing
- Database-backed data handling

### Security & Bot Protection

The contact API includes multiple layers of protection:

- Google reCAPTCHA verification
- Email validation
- Rate limiting
- Server-side request validation
- Protected backend endpoints

### Database Integration

The backend uses Prisma ORM with PostgreSQL for structured and reliable data storage.

The database layer provides a foundation for storing and managing portfolio contact inquiries.

### Full-Stack Architecture

The project combines a React frontend with a Node.js/Express backend and PostgreSQL database.

The architecture is organized so that frontend presentation, backend logic, and data management remain clearly separated.

### Deployment

The application is configured for deployment through Vercel using a unified project structure.

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- JavaScript (ES6+)
- Tailwind CSS

### Backend

- Node.js
- Express.js

### Database

- PostgreSQL
- Prisma ORM

### Security & Validation

- Google reCAPTCHA
- Express Rate Limit
- Server-side validation

### Email

- Nodemailer

### Deployment

- Vercel

---

## 🏗️ Architecture

The portfolio follows a full-stack architecture with separate responsibilities for the frontend, backend, and database.

```text
┌─────────────────────────────────────┐
│            React Frontend           │
│                                     │
│  Hero • Services • Projects         │
│  Process • Contact • CTA            │
└─────────────────┬───────────────────┘
                  │
                  │ REST API
                  ▼
┌─────────────────────────────────────┐
│          Node.js / Express          │
│                                     │
│  Contact API                        │
│  Validation                         │
│  Rate Limiting                      │
│  reCAPTCHA Verification             │
│  Email Notifications                │
└─────────────────┬───────────────────┘
                  │
                  ▼
┌─────────────────────────────────────┐
│            PostgreSQL               │
│                                     │
│       Contact / Inquiry Data        │
└─────────────────────────────────────┘
```  
## 📂 Project Structure

```text
Emmanuel-portfolio/
│
├── api/
│   ├── prisma/
│   │   ├── migrations/
│   │   └── schema.prisma
│   │
│   ├── src/
│   │   ├── config/
│   │   │   └── mail.js
│   │   │
│   │   ├── controllers/
│   │   │   └── ContactController.js
│   │   │
│   │   ├── middleware/
│   │   │   ├── rateLimiter.js
│   │   │   └── validateEmail.js
│   │   │
│   │   ├── routes/
│   │   │   └── contactRoutes.js
│   │   │
│   │   └── utils/
│   │       └── verifyRecaptcha.js
│   │
│   ├── index.js
│   └── prisma.config.ts
│
├── my-portfolio/
│   ├── public/
│   │   ├── robots.txt
│   │   └── sitemap.xml
│   │
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   └── index.css
│   │
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── vercel.json
└── README.md
```
## 💡 Development Approach

The portfolio was built around the same principles I apply when developing client projects.

### 1. Start With the User

The interface is structured around what visitors need to understand quickly:

What I do
What I can build
What I have built
How I approach projects
How to get in touch
### 2. Build for Conversion

Important actions are intentionally supported with clear calls-to-action and straightforward navigation.

The goal is not simply to make the website look good, but to guide visitors toward taking action.

### 3. Keep the Interface Responsive

The experience is designed to remain usable across different screen sizes and devices.

### 4. Separate Frontend and Backend Responsibilities

The frontend focuses on presentation and user interaction while the backend handles server-side processing, validation, email delivery, and database operations.

### 5. Add Security at the API Layer

Client-side validation alone is not treated as sufficient.

Requests reaching the backend are independently validated and protected against common abuse patterns such as automated spam and excessive requests.

## ⚡ Local Development

### Prerequisites

Make sure you have installed:

-Node.js
-npm
-Git
-PostgreSQL
### 1. Clone the Repository

```bash
git clone <your-github-repository-url>
cd Emmanuel-portfolio
```
### 2. Install Backend Dependencies
cd api
npm install
```
### 3. Install Frontend Dependencies
```bash
cd ../my-portfolio
npm install
```

# #🔐 Environment Variables

Create a `.env` file inside the `api/` directory.

Example:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/portfolio_db"
RECAPTCHA_SECRET_KEY="your-recaptcha-secret-key"

SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
```

Never commit `.env` files or private credentials to GitHub.

## 🗄️ Database Setup

From the backend directory:

```bash
cd api
npx prisma migrate dev
```

This applies the Prisma database migrations to your local PostgreSQL database..

## ▶️ Run the Application

### Backend

From the `api` directory:

```bash
npm run dev
```

### Frontend

Open another terminal:

```bash
cd my-portfolio
npm run dev
```

The frontend development server will then be available through the Vite development URL.

## 🚀 Production Build

To create a production build of the frontend:

```bash
cd my-portfolio
npm run build
```

The generated build can then be deployed through the configured hosting platform.

## 📈 What This Project Demonstrates

This portfolio demonstrates practical experience with:

- React application development
- Responsive UI development
- Tailwind CSS
- REST API integration
- Node.js and Express
- PostgreSQL
- Prisma ORM
- Form handling
- Server-side validation
- Email automation
- reCAPTCHA integration
- Rate limiting
- API architecture
- Database-backed applications
- Vite production builds
- Vercel deployment

More importantly, it demonstrates the ability to connect these technologies into a complete user-facing product rather than using them in isolation.

## 🔗 Featured Projects

The portfolio showcases projects covering different types of real-world web solutions, including:

- Digital purchasing and manual distribution systems
- Booking and service-based platforms
- Business websites
- Landing pages
- Web applications with dashboards and backend functionality

Each project is selected to demonstrate a different aspect of my development capabilities.

## 👨🏽‍💻 About Me

I'm Emmanuel Oguntoke, a Full-Stack Web Developer focused on building practical web solutions that help businesses attract customers, improve their online presence, and streamline their operations.

My current stack includes:

**JavaScript • React • Tailwind CSS • Node.js • Express • PostgreSQL**

I enjoy taking an idea from concept to a functional product — designing the interface, building the frontend, connecting the backend, integrating third-party services, and preparing the application for deployment.

## 🤝 Let's Work Together

I'm open to:

- Freelance web development projects
- Business websites
- High-converting landing pages
- Booking and appointment systems
- Custom web applications
- Admin dashboards
- Full-stack development
- Collaboration and development opportunities

If you have a project that needs to move from an idea to a working web solution, feel free to get in touch.

## 🌐 Connect With Me

- **GitHub:** [@GodWithUs17](https://github.com/GodWithUs17)
- **LinkedIn:** [Emmanuel Oguntoke](https://www.linkedin.com/in/oguntoke-emmanuel/)
