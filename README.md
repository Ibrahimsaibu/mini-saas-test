# Mini Saas – Business Intelligence Dashboard

A fully functional and visually appealing Business Intelligence Mini Saas built with **Next.js**, **Tailwind CSS**, **MUI**, and **Recharts**.
This application includes user authentication, a dynamic dashboard with key business metrics, data visualizations, and session management for security.

## ✨ Live Demo

> 🔗

---

## 📦 Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS + Radix UI
- **Data Visualization**: Recharts
- **State Management**: React Context + Hooks
- **Authentication**: Nextjs Api + Cookie
- **Api**: Nextjs Api
- **Deployment**: Vercel

---

## 🚀 Getting Started

### 1. **Clone the repository**

```bash
git clone https://github.com/Ibrahimsaibu/mini-saas.git
cd mini-saas
```

### 2. **Install dependencies**

```bash
pnpm install
```

### 3. **Run the development server**

```bash
pnpm run dev
```

### 4. **Visit the app**

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Authentication Flow

- **Register**: Users sign up with full name, email, and password, user details are being stored in a JSON file as a mock DB.
- **Login**: Users log in with email and password which must have been stored in the json file, and an HTTP only cookie is being set for session management.
- **"Keep Me Logged In"**:
  - ✅ Checked: Session persists until manually logged out.
  - ❌ Unchecked: User is automatically logged out after 1 minute of inactivity.
- **Protected Routes**: Dashboard is only accessible to authenticated users.

---

## 📊 Dashboard Features

### 📈 **Metrics Summary**

- Total Users
- Active Sessions
- Sales Revenue

Displayed using clean, responsive cards.

### 📉 **Charts**

Implemented with **Recharts**:

- **Line Chart**: Sales trends over time
- **Bar Chart**: User growth by month
- **Donut Chart**: Category distribution

### 🧾 **Data Table**

- Shows mock user/sales data
- Supports sorting and filtering
- Styled with MUI Table components

### ⏰ **Auto Logout**

- Inactivity timeout (1 minute) if “Keep me logged in” is not selected
- Uses activity listeners to reset timer on user interaction

---

## 🎨 Design Considerations

- **Component Architecture**: Modular structure using layout components and custom hooks
- **UI Consistency**: Tailwind for utility styling + Radix for accessibility and responsiveness
- **Responsiveness**: Fully optimized for mobile, tablet, and desktop screens
- **Theme**: Light mode pr darkmode, with a toggle button bottom left for easy access

---

## 🛡️ Security

- cookie-based auth
- Logout on inactivity
- Route protection via middleware

---

This Mini Saas project was created to demonstrate frontend and dashboard design proficiency. Built with performance, usability, and best practices in mind.
