# 🌿 GreenHaven - An Indoor Plant Care & Store

GreenHaven is a modern, nature-inspired web application designed for indoor plant enthusiasts. Explore a curated collection of plants, get expert care tips, and style your home with eco-decor ideas. Built with performance and user experience in mind.

## ✨ Features

- **🌸 Interactive Hero Slider**: A smooth, nature-inspired carousel featuring our latest arrivals and care slogans.
- **🪴 Specialized Plant Catalog**: Browse and explore a wide variety of indoor plants with ease.
- **🔒 Protected Plant Details**: In-depth information about each plant, accessible to registered users.
- **📅 Consultation Booking**: Reach out to plant specialists through our integrated booking system.
- **👤 User Authentication**: Secure Login and Signup powered by Firebase, including Google Social Login.
- **🛠️ Profile Management**: Real-time profile updates including display name and photo.
- **💡 Plant Care & Eco-Decor**: Expert advice on watering, sunlight, and fertilizing, plus creative styling ideas.
- **🔑 Password Recovery**: Functional "Forgot Password" flow with direct mail redirection.

## 🚀 Tech Stack

- **Frontend**: [React 19](https://react.dev/), [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Authentication**: [Firebase Auth](https://firebase.google.com/products/auth)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Slider**: [Swiper.js](https://swiperjs.com/)
- **Navigation**: [React Router 7](https://reactrouter.com/)
- **Toast Notifications**: [React Hot Toast](https://react-hot-toast.com/)

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rushdv/greenhaven.git
   cd greenhaven
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root and add your Firebase credentials:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

## 🛠️ Folder Structure

```text
├── src/
│   ├── components/       # Reusable UI components (Home, Layout, Shared)
│   ├── contexts/         # Authentication context provider
│   ├── firebase/         # Firebase initialization setup
│   ├── hooks/            # Custom hooks for Auth and Plant data
│   ├── pages/            # Application routes (Home, Plants, Auth, Profile)
│   ├── router.jsx        # App routing configuration
│   └── index.css         # Global styles & Tailwind directives
├── public/               # Static assets (JSON data, favicons)
└── package.json          # Project dependencies and scripts
```

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.


