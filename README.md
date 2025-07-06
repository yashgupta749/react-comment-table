# React Comment Table

A modern, responsive React application for viewing and managing user comments with real-time search, pagination, and inline editing capabilities.

## 🚀 Features

- **📊 Interactive Comment Table**: Display comments in a clean, organized table format
- **🔍 Real-time Search**: Search through comments by email, name, or comment content
- **✏️ Inline Editing**: Edit comment names and bodies directly in the table
- **💾 Local Storage**: Automatically saves edits to browser localStorage
- **📱 Responsive Design**: Mobile-friendly card view and desktop table view
- **📄 Pagination**: Navigate through large datasets with smart pagination
- **🔄 Data Persistence**: Edits persist across browser sessions
- **⚡ Fast Loading**: Optimized data fetching with loading states

## 🛠️ Tech Stack

### Frontend

- **React 19.1.0** - Modern React with hooks and functional components
- **React DOM 19.1.0** - React rendering for web
- **CSS3** - Custom styling with responsive design
- **Local Storage API** - Client-side data persistence

### Development Tools

- **Create React App 5.0.1** - React development environment
- **React Scripts 5.0.1** - Build tools and development server
- **ESLint** - Code linting and quality assurance

### Testing

- **@testing-library/react 16.3.0** - React component testing
- **@testing-library/jest-dom 6.6.3** - Custom Jest matchers
- **@testing-library/user-event 13.5.0** - User interaction testing
- **@testing-library/dom 10.4.0** - DOM testing utilities

### External APIs

- **JSONPlaceholder API** - Mock data for comments and posts

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd react-comment-table
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 🎯 Usage

### Viewing Comments

- The application automatically loads comments from the JSONPlaceholder API
- Comments are displayed in a table format on desktop and card format on mobile
- Each comment shows: Email, Name, Comment body, and associated Post title

### Searching Comments

- Use the search bar in the navigation to filter comments
- Search works across email, name, and comment content
- Results update in real-time as you type

### Editing Comments

- **Desktop**: Click on the name or comment fields to edit inline
- **Mobile**: Edit directly in the card view
- All edits are automatically saved to localStorage
- Edits persist when you refresh the page

### Navigation

- Use pagination controls to navigate through large datasets
- 10 comments are displayed per page
- Smart pagination shows relevant page numbers with ellipsis for large datasets

## 📁 Project Structure

```
src/
├── components/
│   ├── CommentTable.jsx    # Main table component with pagination
│   ├── Navbar.jsx          # Navigation bar with search
│   └── TableRow.jsx        # Individual table row component
├── App.js                  # Main application component
├── App.css                 # Application styles
└── index.js               # Application entry point
```

## 🧪 Testing

Run the test suite:

```bash
npm test
```

Run tests in watch mode:

```bash
npm test -- --watch
```

## 🏗️ Building for Production

Create a production build:

```bash
npm run build
```

The build files will be created in the `build/` directory, ready for deployment.

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📝 API Integration

The application fetches data from:

- **Comments**: `https://jsonplaceholder.typicode.com/comments`
- **Posts**: `https://jsonplaceholder.typicode.com/posts`

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues or have questions, please open an issue in the repository.
