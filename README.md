# Student Notes Manager

A simple web application for managing student notes with a clean interface, built with HTML, CSS, JavaScript, Node.js, Express, and MongoDB.

## Features

- ✅ Add notes with title and description
- ✅ View all notes in a clean, organized layout
- ✅ Notes are stored in MongoDB database
- ✅ Simple and beginner-friendly interface
- ✅ Separate frontend and backend architecture
- ✅ Real-time updates and error handling
- ✅ Responsive design for all devices

## Project Structure

```
student-notes-manager/
├── backend/
│   ├── package.json          # Backend dependencies
│   ├── server.js             # Express server and API routes
│   └── .env                  # Environment variables
├── frontend/
│   ├── index.html            # Main HTML file
│   ├── style.css             # CSS styling
│   └── script.js             # Frontend JavaScript
└── README.md                 # This file
```

## Prerequisites

Before you begin, ensure you have the following installed:

1. **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
2. **MongoDB** - [Download here](https://www.mongodb.com/try/download/community)
3. **Git** (optional) - [Download here](https://git-scm.com/)

## Setup Instructions

### 1. Clone or Download the Project

If you have this project in a folder, skip to step 2. Otherwise, clone it:

```bash
git clone <repository-url>
cd student-notes-manager
```

### 2. Install MongoDB

Make sure MongoDB is installed and running on your system:

- **Windows**: Install MongoDB Community Server and start the MongoDB service
- **macOS**: Use Homebrew: `brew install mongodb-community && brew services start mongodb-community`
- **Linux**: Follow the official MongoDB installation guide

Verify MongoDB is running:
```bash
mongosh
```

### 3. Set Up the Backend

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

### 4. Configure Environment Variables

The `.env` file is already created with default settings:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/student-notes
```

If your MongoDB is running on a different port or host, update the `MONGODB_URI` accordingly.

### 5. Start the Backend Server

```bash
npm start
```

You should see:
```
Server is running on port 5000
MongoDB connected successfully
```

For development with auto-reload:
```bash
npm run dev
```

### 6. Set Up the Frontend

Open a new terminal window and navigate to the frontend directory:

```bash
cd frontend
```

### 7. Serve the Frontend

Since this is a simple frontend, you can use any static file server. Here are a few options:

**Option 1: Using Node.js (recommended)**
```bash
npx http-server . -p 3000
```

**Option 2: Using Python**
```bash
# Python 3
python -m http.server 3000

# Python 2
python -m SimpleHTTPServer 3000
```

**Option 3: Using Live Server (VS Code extension)**
- Install the "Live Server" extension in VS Code
- Right-click `index.html` and select "Open with Live Server"

### 8. Access the Application

- **Frontend**: Open your browser and go to `http://localhost:3000`
- **Backend API**: Available at `http://localhost:5000/api/notes`

## Usage

1. **Add a Note**:
   - Enter a title and description in the form
   - Click "Add Note" to save it to the database

2. **View Notes**:
   - All notes are displayed automatically
   - Notes are sorted by creation date (newest first)
   - The page refreshes every 30 seconds to show new notes

3. **Error Handling**:
   - Success and error messages appear as notifications
   - Form validation ensures all fields are filled

## API Endpoints

### GET /api/notes
Returns all notes from the database.

**Response:**
```json
[
  {
    "_id": "64a1b2c3d4e5f6789012345",
    "title": "Study JavaScript",
    "description": "Review async/await concepts",
    "createdAt": "2023-07-01T10:30:00.000Z"
  }
]
```

### POST /api/notes
Creates a new note.

**Request Body:**
```json
{
  "title": "New Note Title",
  "description": "Note description here"
}
```

**Response:**
```json
{
  "_id": "64a1b2c3d4e5f6789012346",
  "title": "New Note Title",
  "description": "Note description here",
  "createdAt": "2023-07-01T10:35:00.000Z"
}
```

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**:
   - Ensure MongoDB is running
   - Check the connection string in `.env`
   - Verify MongoDB is on the correct port (default: 27017)

2. **Port Already in Use**:
   - Change the PORT in `.env` file
   - Kill the process using the port: `netstat -ano | findstr :5000` (Windows)

3. **CORS Errors**:
   - Ensure backend is running before accessing frontend
   - Check that the frontend is trying to connect to `http://localhost:5000`

4. **Dependencies Not Found**:
   - Run `npm install` in the backend directory
   - Ensure you're in the correct directory

### Debug Mode

To enable debug logging, add this to your `.env`:
```
DEBUG=*
```

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Additional**: CORS for cross-origin requests, dotenv for environment variables

## Contributing

This is a beginner-friendly project. Feel free to:
- Add new features (edit/delete notes)
- Improve the UI/UX
- Add authentication
- Implement search functionality

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions, feel free to check the troubleshooting section or create an issue in the repository.
