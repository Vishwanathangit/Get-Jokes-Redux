# 🎭 Chuck Norris Jokes App

A beautiful, modern React application that fetches hilarious Chuck Norris jokes by category using the Chuck Norris API. Built with React, Redux Toolkit, and styled with Tailwind CSS.

## ✨ Features

- 🎨 **Beautiful Modern UI** - Glassmorphism design with gradient backgrounds
- 🔄 **Dynamic Categories** - Fetches available categories from Chuck Norris API
- ⚡ **Smart Error Handling** - Shows available categories only when needed
- 🎯 **Input Validation** - Validates categories against API data
- 📱 **Responsive Design** - Works perfectly on all devices
- 🚀 **Loading States** - Smooth animations and loading indicators
- ⌨️ **Keyboard Support** - Press Enter to fetch jokes
- 🎪 **Interactive Elements** - Click category tags to auto-fill
- 🎭 **Emoji Integration** - Fun emojis throughout the interface

## 🚀 Demo

[Live Demo](https://get-jokes-redux.onrender.com/) | [GitHub Repo](https://github.com/Vishwanathangit/Get-Jokes-Redux.git)

## 🛠️ Tech Stack

- **Frontend:** React 18, Redux Toolkit
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **API:** Chuck Norris API
- **HTTP Client:** Axios
- **State Management:** Redux with Redux Toolkit

## 📦 Installation

1. **Clone the repository**
     https://github.com/Vishwanathangit/Get-Jokes-Redux.git
   
2. **Install dependencies**
   npm install
 
3. **Start the development server**
   npm run dev
  
## 📁 Project Structure

<pre>
  ```
  GET JOKES REDUX/
│
├── node_modules/
├── public/
├── src/
│   ├── assets/              # (Possibly for images or static files)
│   ├── App.css              # Styling for App component
│   ├── App.jsx              # Main App component
│   ├── index.css            # Global CSS
│   ├── main.jsx             # ReactDOM render entry file
│   ├── Jokeslice.jsx        # Redux slice for jokes and categories
│   ├── store.jsx            # Redux store configuration
│
├── .gitignore
├── eslint.config.js
├── index.html               # Entry HTML file
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js           # Vite configuration

  ```
</pre>

## 🎯 How to Use

1. **Enter a Category**: Type any joke category (e.g., "animal", "dev", "sport")
2. **Get Joke**: Click the button or press Enter
3. **Invalid Category?**: Available categories will appear automatically
4. **Quick Select**: Click on any category tag to auto-fill
5. **Enjoy**: Read hilarious Chuck Norris jokes! 😂


## 🎨 Design Features

- **Glassmorphism Effects**: Modern frosted glass design
- **Gradient Backgrounds**: Beautiful purple-to-blue gradients
- **Smooth Animations**: Hover effects and loading spinners
- **Responsive Layout**: Mobile-first design approach
- **Interactive Elements**: Clickable category tags
- **Loading Indicators**: Visual feedback for all async operations
